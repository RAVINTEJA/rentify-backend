import {
    createProperty,
    getPropertiesByOwner,
    updateProperty,
    deleteProperty,
} from "../services/property.service.js";

export const addProperty = async (req, res) => {
    try {
        const property = await createProperty(req.body, req.userId); // Assuming req.userId is set by the authentication middleware
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ error: (error).message });
    }
};

export const getMyProperties = async (req, res) => {
    try {
        const properties = await getPropertiesByOwner(req.userId); // Assuming req.userId is set by the authentication middleware
        res.status(200).json(properties);
    } catch (error) {
        res.status(400).json({ error: (error).message });
    }
};


export const editProperty = async (req, res) => {
    try {
        const property = await updateProperty(
            Number(Number(req.params.id)),
            req.body
        ); // Convert Number(req.params.id) to a number
        res.status(200).json(property);
    } catch (error) {
        res.status(400).json({ error: (error).message });
    }
};

export const removeProperty = async (req, res) => {
    try {
        await deleteProperty(Number(req.params.id));
        res.status(200).send("Property deleted");
    } catch (error) {
        res.status(400).json({ error: (error).message });
    }
};
