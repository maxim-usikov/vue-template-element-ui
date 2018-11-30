import client from './feathers-client';

/**
 * Базовый класс для работы с API сервисами.
 *
 * @see: https://gitlab.com/yuricodes/cps-frontend/issues/5
 */
class BaseService {
  /**
   * Создает сервис.
   *
   * @param {string} name - Название сервиса.
   * @param {function} service - Клиент сервиса.
   */
  constructor(name, service) {
    this.name = name || 'base';
    this.service = (service && service(this.name)) || client.service(this.name);
  }

  /**
   * Получение списка всех ресурсов сервиса.
   *
   * @param {object} params - Параметры.
   * @return {Promise<object>}
   *
   * @see https://docs.feathersjs.com/api/services.html#findparams
   */
  async find(params) {
    return this.service.find(params);
  }

  /**
   * Получение одного ресурса сервиса по идентификатору.
   *
   * @param {(string|number|null)} id - Идентификатор ресурса.
   * @param {object} params - Параметры.
   * @return {Promise<object>}
   *
   * @see https://docs.feathersjs.com/api/services.html#getid-params
   */
  async get(id, params) {
    return this.service.get(id, params);
  }

  /**
   * Создание ресурса сервиса.
   *
   * @param {object} data - Данные.
   * @return {Promise<object>}
   *
   * @see https://docs.feathersjs.com/api/services.html#createdata-params
   */
  async create(data) {
    return this.service.create(data);
  }

  /**
   * Замена одного ресурса сервиса по идентификатору данными.
   *
   * @param {(string|number|null)} id - Идентификатор ресурса.
   * @param {object} data - Данные.
   * @param {object} params - Параметры.
   * @return {Promise<object>}
   *
   * @see https://docs.feathersjs.com/api/services.html#updateid-data-params
   */
  async update(id, data, params) {
    return this.service.update(id, data, params);
  }

  /**
   * Обновление одного ресурса сервиса по идентификатору данными.
   *
   * @param {(string|number|null)} id - Идентификатор ресурса.
   * @param {object} data - Данные.
   * @param {object} params - Параметры.
   * @return {Promise<object>}
   *
   * @see https://docs.feathersjs.com/api/services.html#patchid-data-params
   */
  async patch(id, data, params) {
    return this.service.patch(id, data, params);
  }

  /**
   * Удаление ресурса сервиса по идентификатору.
   *
   * @param {(string|number|null)} id - Идентификатор ресурса.
   * @param {object} params - Параметры.
   * @return {Promise<object>}
   *
   * @see https://docs.feathersjs.com/api/services.html#removeid-params
   */
  async remove(id, params) {
    return this.service.remove(id, params);
  }

  async on(eventname, listener) {
    return this.service.on(eventname, listener);
  }

  async once(eventname, listener) {
    return this.service.once(eventname, listener);
  }

  async removeListener(eventname, listener) {
    return this.removeListener(eventname, listener);
  }
}

export default BaseService;
