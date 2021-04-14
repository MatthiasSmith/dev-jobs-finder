const getQueryParamString = (
  url: string,
  paramName: string,
  paramValue: any
) => {
  return `${url.indexOf('?') > -1 ? '&' : '?'}${paramName}=${paramValue}`;
};

export default getQueryParamString;
