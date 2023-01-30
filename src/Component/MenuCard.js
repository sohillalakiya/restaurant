import React from 'react'

function MenuCard({ items }) {

    return (
        <section className="main-card--cointainer">
            {items.map((item) => {
                const { name, description, image, id } = item;
                return (
                    <div className="card-container" key={id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{id}</span>
                                <span className="card-author subtle">{name}</span>
                                <h2 className="card-title">{name}</h2>
                                <span className="card-description subtle">
                                    {description}
                                </span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={image} alt="images" className="card-media" />
                            <span className="card-tag subtle">Order Now</span>
                        </div>
                    </div>
                )
            })}
        </section>

    )
}

export default MenuCard