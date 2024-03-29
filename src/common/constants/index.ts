// swagger config
export const SWAGGER_API_ROOT = 'api/docs';
export const SWAGGER_API_NAME = 'Backend Base API';
export const SWAGGER_API_DESCRIPTION = 'Documentacion de la API';
export const SWAGGER_API_CURRENT_VERSION = '1.0';

export enum Status {
  CREATE = 'CREADO',
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
  PENDING = 'PENDIENTE',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum Gender {
  MASCULINO = 'M',
  FEMENINO = 'F',
  OTRO = 'OTRO',
}

export enum Transaction {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

export const USUARIO_SISTEMA = '1';
export const USUARIO_NORMAL = '0';
