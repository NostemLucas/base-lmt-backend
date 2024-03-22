// response messages

export enum Messages {
  // Excepciones genéricas
  EXCEPTION_BAD_REQUEST = 'La solicitud continene errores de validación.',
  EXCEPTION_UNAUTHORIZED = 'Usuario no autorizado.',
  EXCEPTION_FORBIDDEN = 'No tienes permiso para realizar esta acción.',
  EXCEPTION_NOT_FOUND = 'Recurso no encontrado.',
  EXCEPTION_PRECONDITION_FAILED = 'La solicitud no cumple con una condición previa.',
  EXCEPTION_DEFAULT = 'Ocurrió un error desconocido.',
  EXCEPTION_REFRESH_TOKEN_NOT_FOUND = 'Sesión finalizada.',
  EXCEPTION_REFRESH_TOKEN_EXPIRED = 'Sesión expirada por inactividad.',
  EXCEPTION_INTERNAL_SERVER_ERROR = 'Ocurrió un error interno.',
  EXCEPTION_FOR_INSUFFICIENT_PERMITS = 'Permisos insuficientes para realizar esta acción.',

  // Mensajes de éxito genéricos
  SUCCESS_DEFAULT = '¡Tarea completada con éxito!',
  SUCCESS_LIST = 'Registros obtenidos con éxito.',
  SUCCESS_CREATE = 'Registro creado con éxito.',
  SUCCESS_UPDATE = 'Registro actualizado con éxito.',
  SUCCESS_DELETE = 'Registro eliminado con éxito.',

  // Mensajes de lógica de negocios
  SUCCESS_ACCOUNT_UNLOCK = 'Cuenta desbloqueada exitosamente.',
  INVALID_USER_CREDENTIALS = 'Credenciales de usuario inválidas.',
  NO_PERMISSION_USER = 'El usuario no tiene roles asignados.',
  INVALID_USER = 'El usuario no existe o no tiene un estado válido.',
  INVALID_CREDENTIALS = 'Credenciales incorrectas.',
  INACTIVE_USER = 'El usuario está inactivo.',
  INVALID_PASSWORD_SCORE = 'La nueva contraseña no cumple con el nivel de seguridad necesario.',
  USER_BLOCKED = 'El usuario ha sido bloqueado debido a demasiados intentos fallidos de inicio de sesión. Revisa tu correo electrónico.',
  EXISTING_USER = 'Ya existe un usuario registrado con el mismo nombre de usuario',
  EXISTING_EMAIL = 'Ya existe un usuario registrado con el mismo correo electrónico.',
  NEW_USER_ACCOUNT = '¡Usuario creado exitosamente!',
  NEW_USER_ACCOUNT_VERIFY = 'Activación de cuenta.',
  ACCOUNT_ACTIVED_SUCCESSFULLY = '¡Activación de cuenta exitosa!',
  NO_PERMISSION_FOUND = 'Rol no encontrado.',

  // Parámetros
  REPEATED_PARAMETER = 'Parámetro repetido.',
}
