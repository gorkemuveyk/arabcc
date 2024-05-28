import { useDispatch } from "react-redux";
import { destoryBasket } from "../../redux/slices/basketSlice";

const BasketInfo = () => {
  const dispatch = useDispatch();
  const keys = Object.keys(localStorage);
  let totalProduct = 0,
    cargo = 7,
    total = 0;

  keys.map((key) => {
    const tempData = JSON.parse(localStorage.getItem(key));
    totalProduct += tempData.price * tempData.quantity;
  });
  total = totalProduct - cargo;
  return (
    <div className="flex flex-col p-2 gap-5 rounded">
      <a
        className="bg-orange-500 text-white p-2 rounded text-center cursor-pointer"
        href="/siparis-ver"
      >
        طلبية كاملة
      </a>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-start text-xl my-4 w-full">ملخص الطلب</h1>
        <div className="flex flex-row justify-between p-3 w-full items-center border-b">
          <p>سعر المنتج</p>
          <span className="text-orange-400 font-bold text-xl">
            $ {totalProduct}
          </span>
        </div>
        <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
          <p>الشحن</p>
          <span className="text-orange-400 font-bold text-xl">${cargo} </span>
        </div>
        <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
          <p>شحن مجاني على هذا المنتج</p>
          <span className="text-orange-400 font-bold text-xl">- ${cargo}</span>
        </div>
        <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
          <p>المبلغ المستحق الدفع</p>
          <span className="text-orange-400 font-bold text-xl">
            $ {total + cargo}
          </span>
        </div>
        <div className="flex justify-between w-full  items-center">
          <input
            className="w-full p-2 rounded m-2 border border-orange-500 outline-none"
            type="text"
            placeholder="إذا كان لديك رمز خصم، أدخله"
          />
          <button className="w-full bg-orange-500 rounded p-2 text-white">
            تطبيق الخصم
          </button>
        </div>
      </div>
      <a
        className="bg-orange-500 text-white p-2 rounded text-center cursor-pointer"
        href="/siparis-ver"
      >
        طلبية كاملة
      </a>
    </div>
  );
};

export default BasketInfo;
