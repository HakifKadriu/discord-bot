const { IPinfoWrapper } = require("node-ipinfo");
const dotenv = require("dotenv");

dotenv.config();

const ipinfoWrapper = new IPinfoWrapper(process.env.IPINFO_TOKEN);

const getipinfo = async (ip) => {
  let location;

  await ipinfoWrapper.lookupIp(ip).then((response) => {
    location = response;
  });

  return location;
};

module.exports = {
  getipinfo,
};
