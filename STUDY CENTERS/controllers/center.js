const Center = require("../models/centers");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getAllCenters = async (req, res) => {
  const centers = await Center.find({ createdBy: req.owner.ownerId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ centers, count: centers.length });
};

const getSingleCenter = async (req, res) => {
  const {
    owner: { ownerId },
    params: { id: centerId },
  } = req;

  const center = await Center.findOne({
    _id: centerId,
    createdBy: ownerId,
  });
  if (!center) {
    throw new NotFoundError(`NO center exists with id ${centerId}`);
  }
  res.status(StatusCodes.OK).json({ center });
};

const createCenter = async (req, res) => {
  req.body.createdBy = req.owner.ownerId;
  const center = await Center.create(req.body);
  res.status(StatusCodes.CREATED).json({ center });
};

const updateCenter = async (req, res) => {
  const {
    body: {name, location},
    owner: { ownerId },
    params: { id: centerId },
  } = req;
if(name === '' || location === ''){
    throw new BadRequestError('Name or Location fields can not be empty')
}
  const center = await Center.findByIdAndUpdate({
    _id: centerId,
    createdBy: ownerId,
  }, req.body, {new:true, runValidators:true});
  if (!center) {
    throw new NotFoundError(`NO center exists with id ${centerId}`);
  }
  res.status(StatusCodes.OK).json({ center });
};

const deleteCenter = async (req, res) => {
   const {params:{id: centerId}, owner:{ownerId}} = req

   const center = await Center.findByIdAndDelete({
    _id:centerId, createdBy:ownerId
   })
   if(!center){
    throw new NotFoundError(`NO center with id ${centerId}`)
   }
res.status(StatusCodes.OK).send()
};

module.exports = {
  getAllCenters,
  getSingleCenter,
  createCenter,
  updateCenter,
  deleteCenter,
};
