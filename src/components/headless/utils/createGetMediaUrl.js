// @flow
const createGetMediaUrl = (baseURL: string, prefix: string) => (
  link: string,
  ratio?: string,
  minWidth?: number
): string => {
  if (link && link.startsWith(prefix)) {
    const parts = link.substring(prefix.length).split('/');
    if (parts.length === 3) {
      const [type, id, property] = parts;
      switch (type) {
        case 'image': {
          const mediaUrl = `${baseURL}/media/${id}/${property}`;
          let queryParams = '';
          if (ratio) {
            queryParams = `?ratio=${ratio}`;
          }
          if (minWidth) {
            queryParams = `${!queryParams ? '?' : `${queryParams}&`}minWidth=${minWidth}`;
          }
          return mediaUrl + queryParams;
        }
        case 'media': {
          return baseURL + `/media/${id}/${property}`;
        }
        default:
          return '';
      }
    }
  }
  return '';
};

export default createGetMediaUrl;
