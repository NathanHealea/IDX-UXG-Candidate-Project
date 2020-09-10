import { createType } from 'store/utils';

// --- Namespace --- //
export const NAMESPACE = 'idx/listing';

// --- Status Types --- //
export const STATUS_SET = createType(NAMESPACE, 'status', 'set');
export const STATUS_INIT = createType(NAMESPACE, 'status', 'init');
export const STATUS_FETCHING = createType(NAMESPACE, 'status', 'fetching');
export const STATUS_UPDATING = createType(NAMESPACE, 'status', 'updating');
export const STATUS_SUCCESS = createType(NAMESPACE, 'status', 'success');
export const STATUS_ERROR = createType(NAMESPACE, 'status', 'error');

// --- List Types --- //
export const LIST_SET = createType(NAMESPACE, 'list', 'set');
