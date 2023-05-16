/* eslint-disable no-unused-vars */
import React from 'react';

const CoffeeAdd = () => {
    return (
        <div>
            <h2>Add a Coffee</h2>
            <form action="">
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CoffeeAdd;