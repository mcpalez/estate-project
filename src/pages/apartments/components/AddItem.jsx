import { useState } from "react";

function AddItem() {
    const [formData, setFormData] = useState({
        inwestycja: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = import.meta.env.VITE_API_URL;
        const apiKey = import.meta.env.VITE_API_KEY;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    apiKey: apiKey,
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to add item");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Inwestycja
                        <input
                            className="bg-gray-100"
                            type="text"
                            name="inwestycja"
                            onChange={handleChange}
                            value={formData.inwestycja}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Pietro
                        <input
                            className="bg-gray-100"
                            type="text"
                            name="pietro"
                            onChange={handleChange}
                            value={formData.pietro}
                        />
                    </label>
                </div>
                <button type="submit">Dodaj mieszkanie</button>
            </form>
        </>
    );
}

export default AddItem;
