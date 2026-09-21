import React from "react";
import "./TermsCard.css";

const TermsCard = ({
    icon,
    iconColor = "green",
    title,
    children
}) => {
    return (
        <section className="terms-card">

            <h2>
                <span
                    className={`terms-card-icon ${iconColor}`}
                >
                    {icon}
                </span>

                {title}
            </h2>

            <div className="terms-card-content">
                {children}
            </div>

        </section>
    );
};

export default TermsCard;