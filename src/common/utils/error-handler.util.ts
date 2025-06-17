import { BadRequestException, HttpException, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { EntityNotFoundError } from "typeorm";

interface DatabaseError {
  code?: string;
  detail?: string;
  // Se pueden añadir más propiedades comunes de errores de DB
}

function isDatabaseError(error: unknown): error is DatabaseError {
  return typeof error === 'object' && error !== null && 'code' in error && 'detail' in error;
}

function handleDBError(error: DatabaseError, logger: Logger) {
	logger.error(error.detail);

	if (error.code == '23505') {
		// Violación de unique constraint
		throw new BadRequestException(error.detail);
	}

	if (error.code === '23503') {
		// Violación de foreign key constraint
		throw new NotFoundException(error.detail);
	}
}

export class ErrorHandlerUtil {
	static handle(error: unknown, logger: Logger): never {
		if (isDatabaseError(error)){
			handleDBError(error, logger);
		}

		if (error instanceof HttpException) {
			throw error;
		}

		if (error instanceof EntityNotFoundError) {
			throw new NotFoundException(error.message);	
		}

		logger.error(error);
    throw new InternalServerErrorException('Please check server logs');
	}
}