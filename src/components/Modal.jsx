export const Modal = ({ show, children }) => {
  return (
    <>
      <div
        id="confirmation"
        className={`${show ? "" : "hidden"} fixed z-30 inset-0 overflow-y-auto`}
      >
        <div className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <div className=" bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full lg:w-10/12 absolute bottom-0 top-0 right-0 left-0 m-auto overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
