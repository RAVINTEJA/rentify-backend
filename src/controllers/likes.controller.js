import {  likeProperty, unlikeProperty } from '../services/likes.service.js';


export const addLike = async (req, res) => {
  try {
    const like = await likeProperty(req.userId, Number(req.params.propertyId));
    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ error: (error).message });
  }
};

export const removeLike = async (req, res) => {
  try {
    const response = await unlikeProperty(req.userId, Number(req.params.propertyId));
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: (error).message });
  }
};
