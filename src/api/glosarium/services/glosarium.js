'use strict';

/**
 * glosarium service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::glosarium.glosarium');
