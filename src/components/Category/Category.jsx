
const Category = ({category}) => {
    // console.log(category);
    const {logo, category_name, availability} = category;
    return (
        <div className="flex flex-col justify-between p-5 border rounded shadow-lg">
            <div className="py-5 px-4 rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <img src={logo} alt="" />
                </div>
                <h6 className="mb-2 text-xl font-bold leading-5">{category_name}</h6>
                <p className="mb-3 text-gray-900">
                    {availability}
                </p>
            </div>
        </div>
    )
};

export default Category