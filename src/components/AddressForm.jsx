export default function AddressForm({ address, setAddress }) {
    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    return (
        <div className="row">
            <div className="col-12 mb-3">
                <input
                    type="text"
                    name="full_name"
                    value={address.full_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="form-control"
                    required
                />
            </div>
            <div className="col-12 mb-3">
                <input
                    type="text"
                    name="street_address"
                    value={address.street_address}
                    onChange={handleChange}
                    placeholder="Street Address"
                    className="form-control"
                    required
                />
            </div>
            <div className="col-12 mb-3">
                <input
                    type="text"
                    name="apartment_address"
                    value={address.apartment_address}
                    onChange={handleChange}
                    placeholder="Apt / Suite (optional)"
                    className="form-control"
                />
            </div>
            <div className="col-md-6 mb-3">
                <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="form-control"
                    required
                />
            </div>
            <div className="col-md-6 mb-3">
                <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="form-control"
                    required
                />
            </div>
            <div className="col-md-6 mb-3">
                <input
                    type="text"
                    name="postal_code"
                    value={address.postal_code}
                    onChange={handleChange}
                    placeholder="Postal Code"
                    className="form-control"
                    required
                />
            </div>
            <div className="col-md-6 mb-3">
                <input
                    type="text"
                    name="country"
                    value={address.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="form-control"
                    required
                />
            </div>
            <div className="col-12 mb-4">
                <input
                    type="tel"
                    name="phone_number"
                    value={address.phone_number}
                    onChange={handleChange}
                    placeholder="Phone Number (optional)"
                    className="form-control"
                />
            </div>
        </div>
    );
}







/*
export default function AddressForm({ address, setAddress }) {
    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    return (
        <>
            <input
                type="text"
                name="full_name"
                value={address.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                required
            />
            <input
                type="text"
                name="street_address"
                value={address.street_address}
                onChange={handleChange}
                placeholder="Street Address"
                required
            />
            <input
                type="text"
                name="apartment_address"
                value={address.apartment_address}
                onChange={handleChange}
                placeholder="Apt / Suite (optional)"
            />
            <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                placeholder="City"
                required
            />
            <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                placeholder="State"
                required
            />
            <input
                type="text"
                name="postal_code"
                value={address.postal_code}
                onChange={handleChange}
                placeholder="Postal Code"
                required
            />
            <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleChange}
                placeholder="Country"
                required
            />
            <input
                type="tel"
                name="phone_number"
                value={address.phone_number}
                onChange={handleChange}
                placeholder="Phone Number (optional)"
            />
        </>
    );
}
*/

