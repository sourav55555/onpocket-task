const ButtonComponent = ({ label, onClickHandler }) => {

  return (
    <div className="w-full text-center pt-16">
      <button
        className="px-10 py-3 bg-sky-900 text-white rounded-3xl hover:bg-transparent hover:text-sky-900 border-[3px] border-sky-900 font-semibold transition-all duration-300 shadow-md shadow-sky-400 "
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonComponent;
