import { useInView } from "react-intersection-observer";
import "./Software.css";

const Software = ({ software }) => {
    const { ref, inView } = useInView({});
    return (
        <div className="Software" ref={ref}>
            <span className="software-name">{software.name}</span>
            <div className="level-container">
                <div className={`level`} style={{ width: `${software.level}%` }}>
                    <div className={`animation ${inView ? "active" : ""}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Software;
