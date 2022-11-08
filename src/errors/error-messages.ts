import { PalanteErrorCodes } from "./palante-error-codes.enum";

export const PalanteErrorMessages = new Map<PalanteErrorCodes, string>([
  [PalanteErrorCodes.ADDRESS_NOT_FOUND, "Dirección no encontrada"],
  [
    PalanteErrorCodes.CART_ADDRESS_NOT_SET,
    "El carrito no tiene una dirección asociada",
  ],
  [PalanteErrorCodes.CART_NOT_FOUND, "Carrito no encontrado"],
  [PalanteErrorCodes.COUPON_EXPIRED, "Cupon expiró"],
  [PalanteErrorCodes.COUPON_NOT_FOUND, "Cupon no encontrado"],
  [PalanteErrorCodes.COUPON_NOT_VALID, "Cupon invalido"],
  [PalanteErrorCodes.COUPON_STORE_NOT_FOUND, "Cupon no tiene tienda asociado"],
  [PalanteErrorCodes.EMPTY_CART, "El carrito no tiene items"],
  [
    PalanteErrorCodes.ITEM_NOT_FROM_CART_STORE,
    "Solo se pueden llevar productos de la misma tienda",
  ],
  [
    PalanteErrorCodes.LINE_ITEM_NON_POSITIVE_QUANTITY,
    "Cantidad de producto invalida",
  ],
  [PalanteErrorCodes.LINE_ITEM_NOT_FOUND, "Item no encontrado"],
  [PalanteErrorCodes.LINE_ITEM_NOT_FROM_CART, "Item no pertenece al carrito"],
  [PalanteErrorCodes.META_ITEM_NOT_FOUND, "Error"],
  [
    PalanteErrorCodes.PRODUCT_MAX_STOCK_PER_ORDER_EXCEEDED,
    "Limite de producto por carrito excedido",
  ],
  [PalanteErrorCodes.PRODUCT_NOT_FOUND, "Producto no encontrado"],
  [
    PalanteErrorCodes.PRODUCT_STOCK_EXCEEDED,
    "No hay suficientes unidades del producto",
  ],
  [PalanteErrorCodes.SESSION_NOT_FOUND, "No se ha iniciado sesión"],
  [PalanteErrorCodes.STORE_NOT_FOUND, "Tienda no encontrada"],
  [PalanteErrorCodes.USER_HAS_NO_ADDRESSES, "No tienes direcciones asociadas"],
  [
    PalanteErrorCodes.CART_OUT_OF_DATE,
    "Carrito no actualizado, intenta refrescar la pagina",
  ],
  [PalanteErrorCodes.USER_NOT_FOUND, "Usuario no encontrado"],
  [
    PalanteErrorCodes.USER_ADDRESS_LIMIT_EXCEEDED,
    "No puedes crear más direcciones",
  ],
  [PalanteErrorCodes.INVALID_PAYLOAD, "Información erronea"],
  [PalanteErrorCodes.INTERNAL_ERROR, "Error procesando información"],
  [
    PalanteErrorCodes.CART_CANNOT_CHECKOUT,
    "Carrito no cumple con los requisitos para hacer checkout",
  ],
]);
