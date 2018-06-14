// @flow
import getComponent from '../getComponent';
import * as Article from '../../../bricks/Article';
import * as Teaser from '../../../bricks/Teasable';
import * as ShoppableVideo from '../../../bricks/ShoppableVideo';

describe('getComponent()', () => {
  it('should return matching Article component', () => {
    const expected = Article.Detail;
    const result = getComponent(Article, 'detail');
    expect(result).toEqual(expected);
  });

  it('should return matching Teaser component', () => {
    const expected = Teaser.Hero;
    const result = getComponent(Teaser, 'hero');
    expect(result).toEqual(expected);
  });

  it('should return matching ShoppableVideo component', () => {
    const expected = ShoppableVideo.Teaser;
    const result = getComponent(ShoppableVideo, 'teaser');
    expect(result).toEqual(expected);
  });

  it('should throw Error', () => {
    const getUndefinedComponent = () => getComponent(Article, 'undefined');
    expect(getUndefinedComponent).toThrowErrorMatchingSnapshot();
  });
});
