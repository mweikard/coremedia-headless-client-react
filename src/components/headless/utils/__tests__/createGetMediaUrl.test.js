// @flow
import createGetMediaUrl from '../createGetMediaUrl';

describe('createGetMediaUrl()', () => {
  const getMediaUrl = createGetMediaUrl('http://localhost', 'coremedia:///');
  it('should return media URL', () => {
    const value = getMediaUrl('coremedia:///media/7576/data');
    const expected = 'http://localhost/media/7576/data';
    expect(value).toEqual(expected);
  });
  it('should return image URL without query parameters', () => {
    const value = getMediaUrl('coremedia:///image/7564/data');
    const expected = 'http://localhost/media/7564/data';
    expect(value).toEqual(expected);
  });
  it('should return image URL with query parameters for ratio', () => {
    const value = getMediaUrl('coremedia:///image/7564/data', '1_1');
    const expected = 'http://localhost/media/7564/data?ratio=1_1';
    expect(value).toEqual(expected);
  });
  it('should return image URL with query parameters for minWidth', () => {
    const value = getMediaUrl('coremedia:///image/7564/data', undefined, 320);
    const expected = 'http://localhost/media/7564/data?minWidth=320';
    expect(value).toEqual(expected);
  });
  it('should return image URL with query parameters for ratio and minWidth', () => {
    const value = getMediaUrl('coremedia:///image/7564/data', '1_1', 320);
    const expected = 'http://localhost/media/7564/data?ratio=1_1&minWidth=320';
    expect(value).toEqual(expected);
  });
  it('should return empty string', () => {
    const value = getMediaUrl('coremedia:///unknown/7564/data');
    const expected = '';
    expect(value).toEqual(expected);
  });
  it('should return empty string', () => {
    const value = getMediaUrl('prefix:///unknown/7564/data');
    const expected = '';
    expect(value).toEqual(expected);
  });
  it('should return empty string', () => {
    const value = getMediaUrl('coremedia:///media/7564');
    const expected = '';
    expect(value).toEqual(expected);
  });
});
