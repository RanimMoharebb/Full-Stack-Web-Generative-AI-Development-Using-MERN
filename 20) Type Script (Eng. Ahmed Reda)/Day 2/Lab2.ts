/************************************************************
TODO: Define an interface 'Product' with:
- id (string)
- name (string)
- price (number)
- category (string)
- inStock (boolean)
- quantity? (optional number for bulk items)
************************************************************/

interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  inStock: boolean;
  quantity?: number;
}

/************************************************************
TODO: Define a custom type 'ProductCategory'
************************************************************/

type ProductCategory = "electronics" | "clothing" | "books" | "food";

/************************************************************
TODO: Define an interface 'Address'
************************************************************/

interface Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

/************************************************************
TODO: Define an interface 'Customer'
************************************************************/

interface Customer {
  id: string;
  name: string;
  email: string;
  loyaltyPoints: number;
  address?: Address;
}

/************************************************************
TODO: Define Discount + DiscountType
************************************************************/

type DiscountType = "percentage" | "fixed";

interface Discount {
  type: DiscountType;
  value: number;
  code?: string;
}

/************************************************************
TODO: Create OrderStatus enum
************************************************************/

enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

/************************************************************
TODO: Create OrderItem intersection type
(Product without quantity) + { quantity, totalPrice }
************************************************************/

type OrderItem = Omit<Product, "quantity"> & {
  quantity: number;
  totalPrice: number;
};

/************************************************************
TODO: Create Order interface
************************************************************/

interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  discount?: Discount;
  shippingAddress: Address;
  orderDate: Date;
  status: OrderStatus;
  readonly totalAmount: number;
}

/************************************************************
TODO: PublicCustomer (exclude loyaltyPoints)
************************************************************/

type PublicCustomer = Omit<Customer, "loyaltyPoints">;

/************************************************************
TODO: PartialOrder
************************************************************/

type PartialOrder = Partial<Order>;

/************************************************************
TODO: ReadonlyOrder
************************************************************/

type ReadonlyOrder = Readonly<Order>;

/************************************************************
TODO: CustomerWithRequiredAddress
************************************************************/

type CustomerWithRequiredAddress = Customer & {
  address: Address;
};

/************************************************************
TODO: ProductWithoutId
************************************************************/

type ProductWithoutId = Omit<Product, "id">;

/************************************************************
TODO: Generic function getItemsById
************************************************************/

function getItemsById<T extends { id: string }>(
  items: T[],
  id: string
): T[] {
  return items.filter((item) => item.id === id);
}

/************************************************************
TODO: Generic APIResponse<T>
************************************************************/

interface APIResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: Date;
}

/************************************************************
TODO: mergeObjects generic function
************************************************************/

function mergeObjects<U extends object, V extends object>(
  obj1: U,
  obj2: V
): U & V {
  return { ...obj1, ...obj2 };
}

/************************************************************
TODO: Function types
************************************************************/

type DiscountCalculator = (total: number, discount: Discount) => number;

type ShippingCalculator = (weight: number, destination: string) => number;

type PaymentProcessor = (
  amount: number,
  paymentDetails: Record<string, any>
) => Promise<boolean>;

/************************************************************
TODO: Implement functions
************************************************************/

const discountCalculator: DiscountCalculator = (total, discount) => {
  if (discount.type === "percentage") {
    return total - (total * discount.value) / 100;
  }
  return total - discount.value;
};

const shippingCalculator: ShippingCalculator = (weight, destination) => {
  const base = 5;
  const perKg = 2;

  if (destination.toLowerCase() === "international") {
    return base + weight * perKg + 15;
  }

  return base + weight * perKg;
};

const paymentProcessor: PaymentProcessor = async (amount, paymentDetails) => {
  // mock payment logic
  console.log("Processing payment:", amount, paymentDetails);
  return true;
};

/************************************************************
TODO: createOrderSummary function
************************************************************/

function createOrderSummary(order: Order): string {
  const itemsText = order.items
    .map(
      (i) =>
        `${i.name} x${i.quantity} = $${i.totalPrice}`
    )
    .join("\n");

  const discountText = order.discount
    ? `Discount: ${order.discount.type} (${order.discount.value})`
    : "No discount";

  return `
ORDER SUMMARY
-------------
ID: ${order.id}
Customer: ${order.customer.name}
Status: ${order.status}
Date: ${order.orderDate.toDateString()}

Items:
${itemsText}

${discountText}

Shipping City: ${order.shippingAddress.city}

Total: ${order.totalAmount}
`;
}