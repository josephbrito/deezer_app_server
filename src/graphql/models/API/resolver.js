const { db } = require("../../db");

module.exports = {
  Query: {
    async data(_, args) {
      const datas = await db(args.param);
      return datas;
    },
  },
};
