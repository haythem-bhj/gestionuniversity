// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/Gestionuniversity_db/UserModel";
import ClasseModel from "../models/Gestionuniversity_db/ClasseModel";
import EtudiantModel from "../models/Gestionuniversity_db/EtudiantModel";
import ExamModel from "../models/Gestionuniversity_db/ExamModel";
import MatiereModel from "../models/Gestionuniversity_db/MatiereModel";
import ProfesseureModel from "../models/Gestionuniversity_db/ProfesseureModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.gestionuniversity_db_dbUrl);

    // Start Init Models

		UserModel.init();
		ClasseModel.init();
		EtudiantModel.init();
		ExamModel.init();
		MatiereModel.init();
		ProfesseureModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_gestionuniversity_db = await mongoose.connect(
        "mongodb://" + properties.gestionuniversity_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_gestionuniversity_db;
  }
}

export default new Database();
