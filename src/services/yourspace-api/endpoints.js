export const API_BASE_URL = "http://localhost:8000/";
export const ADMIN_API = API_BASE_URL + "admin/";

export const BASE_API = API_BASE_URL + "api/";
// Resulta en http://example.com/ + api/

export const BASE_PRODUCTS_API = BASE_API + "products/";
export const BASE_PURCHASES_API = BASE_API + "purchases/";
export const BASE_INVENTORY_API = BASE_API + "inventory/";
export const BASE_USERS_API = BASE_API + "users/";
// Resulta en http://example.com/api/ + [endpoint]/

export const MARCAS_API = BASE_PRODUCTS_API + "marcas/";
export const CATEGORIAS_API = BASE_PRODUCTS_API + "categorias/";
export const TEMPORADAS_EVENTO_API = BASE_PRODUCTS_API + "temporadas_evento/";
export const PRODUCTOS_API = BASE_PRODUCTS_API + "productos/";
export const NUEVO_PRODUCTO_INVENTARIO_API =
  BASE_PRODUCTS_API + "inventario/nuevo/"; //POST
// Resulta en http://example.com/api/products/ + [endpoint]/

export const CARROS_API = BASE_PURCHASES_API + "carros/";
export const CARROS_PRODUCTOS_API = BASE_PURCHASES_API + "carros-productos/";
export const COMPRAS_API = BASE_PURCHASES_API + "compras/";
// Resulta en http://example.com/api/purchases/ + [endpoint]/

export const INVENTARIO_API = BASE_INVENTORY_API + "inventarios/";
export const ADQUISICION_INVENTARIO_API =
  BASE_INVENTORY_API + "adquisiciones-inventario/";
// Resulta en http://example.com/api/inventory/ + [endpoint]/

export const LOGIN_API = BASE_USERS_API + "login/";
// export const LOGOUT_API = BASE_USERS_API + "/logout";
export const REGISTER_API = BASE_USERS_API + "register/";
export const TOKEN_REFRESH_API = BASE_USERS_API + "token/refresh/";
export const TOKEN_VERIFY_API = BASE_USERS_API + "token/verify/";
// Resulta en http://example.com/api/users/ + [endpoint]/
