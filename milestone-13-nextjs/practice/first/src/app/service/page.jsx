import Banner from "../../components/common/Banner";
// import Banner from "@/components/common/Banner";

export default function about() {
    return <div className="container">
        <Banner heading="Service Us" description={"Description service"} isSingleService={true}/>
    </div>
}