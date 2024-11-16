import Bars from "../Bars/Bars";
const StatisticsBanner = () => {
    return (
        <div>
            <div className="relative bg-white h-[290px] lg:h-[320px] px-5">
                <div className="hero bg-[#9538E2] text-white p-5 lg:px-36 rounded-b-lg h-[250px] lg:h-[294px] ">
                    <div className="hero-content text-center">
                        <div className="max-w-xs lg:max-w-4xl lg:max-h-[500px] absolute top-3 lg:top-10 space-y-1">
                            <h1 className="text-4xl lg:text-5xl">Statistics</h1>
                            <p className="lg:py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <button className="btn btn-primary bg-white text-[#9538E2] rounded-full px-6">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Bars></Bars>
        </div>
    );
};

export default StatisticsBanner;