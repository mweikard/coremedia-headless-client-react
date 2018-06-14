// @flow
import React from 'react';

import Fragment from '..';
import * as Teaser from '../../../bricks/Teasable';

describe('Fragment Component', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    // Workaround for https://github.com/facebook/react/issues/11098
    jest.spyOn(console, 'error');
    global.console.error.mockImplementation(() => {});
  });

  afterEach(() => {
    global.console.error.mockRestore();
  });

  it('should render HeroTeaser Component', async () => {
    const data = {
      teaserTitle: 'Content Management at a new Scale with CoreMedia CaaS',
      teaserText: 'Discover the new CoreMedia Headless Services.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/',
      },
      picture: {
        title: 'Globe',
        alt: 'Globe',
        link: 'coremedia:///image/2656/data',
      },
    };
    const wrapper = shallow(
      <Fragment
        fragmentType="teaser"
        viewType="hero"
        data={data}
        params={{ color: 'blue', ctaShow: true, url: '/caas.html' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render SquareTeaser Component', async () => {
    const data = {
      teaserTitle: 'Strategy',
      teaserText:
        'We bring years of expertise to connect our technology to your business objectives and vision.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/en/services/professional-services',
      },
      picture: {
        title: 'Scrum',
        alt: 'Scrum',
        link: 'coremedia:///image/2662/data',
      },
    };
    const wrapper = shallow(
      <Fragment
        fragmentType="teaser"
        viewType="square"
        data={data}
        params={{ color: 'red', ctaShow: true }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render WideTeaser Component', async () => {
    const data = {
      teaserTitle: 'The CoreMedia Content Experience Platform',
      teaserText:
        'Manage content, master digital media &amp; handle eCommerce integrations with ease.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/en/platform',
      },
      picture: {
        title: 'Lego',
        alt: 'Lego',
        link: 'coremedia:///image/2658/data',
      },
    };
    const wrapper = shallow(
      <Fragment
        fragmentType="teaser"
        viewType="wide"
        data={data}
        params={{ color: 'turquoise', ctaShow: true }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render DetailArticle Component', async () => {
    const data = {
      title: 'CoreMedia Content as a Service (CaaS)',
      detailText: `<p>CoreMedia is a Content Management System (CMS) which can manage your content from creation straight through to rendering. Our Content Application Engine (CAE) provides tools and a framework with which you can easily design a beautiful, consistent and fully-functional user experience.</p><p>The components of the CoreMedia system works gracefully together as an isolated system, but it is also flexible enough to be a small but crucial component in a larger ecosystem. This larger system can include commerce systems, brick-and-mortar backend systems, marketing data, user management and many more kinds of sub-systems.</p><p>One way to achieve this flexibility is to make content from our CMS available for another system, leaving you full freedom to design and render your content using the framework of your choice. We affectionately call this service the "Headless API".</p><p>Using the Headless API you can generate ready-to-go HTML content fragments or dynamic Javascript modules. You can then easily insert these fragments into any webpage or single-page application. Use these fragments to seamlessly integrate, reuse, syndicate or publish your content from your CoreMedia CMS anywhere.</p><p><img cms-src="coremedia:///image/2662/data" alt="Scrum" class="float--left"/></p><h2>How does it work?</h2><p>The Headless API defines a simple REST API to access content from the CoreMedia repository. On the server side the content is transformed via GraphQL queries before being returned to the client as JSON response. On the client side, simply parse the JSON response and process it as you please.</p><p>You can customize the GraphQL queries to tailor the returned JSON to your application's needs.</p><p>The first step is to define a schema, which maps from the content properties in the repository scheme to the attributes that you would like to extract. This can be done manually or with the help of a schema generator.</p><p>Then you define a set of GraphQL queries which will be matched against the schema.</p><p>The schema and query set are either deployed alongside the headless server or installed in the CoreMedia repository. The headless server can be started either by Spring Boot or as a Tomcat webapp.</p><p>On the client side, simply request the service's URLs and process the JSON response with whatever technology you prefer.</p><h2>Resources</h2><p>Interested in a deeper understanding of CaaS in CoreMedia? See what we’ve cooked up for you in our <a href="#none" cms-href="coremedia:///page/home~2450">CoreMedia Labs</a>.</p><ul><li><a href="https://labs.coremedia.com/"><strong>Github project</strong></a>: Headless Server as source code, plus a React client as an example</li><li><a href="https://labs.coremedia.com/wiki"><strong>Technical wiki</strong></a>: Documentation on installing and customizing the Headless Server, plus documentation on the example React client</li></ul>`,
      teaserTitle: 'CoreMedia CaaS',
      teaserText:
        'Using the Headless API you can generate ready-to-go HTML content fragments or dynamic Javascript modules. You can then easily insert these fragments into any webpage or single-page application. Use these fragments to seamlessly integrate, reuse, syndicate or publish your content from your CoreMedia CMS anywhere.',
      pictures: [
        {
          title: 'Lego',
          alt: 'Lego',
          link: 'coremedia:///image/2658/data',
        },
      ],
    };
    const wrapper = shallow(
      <Fragment fragmentType="article" viewType="detail" data={data} params={{ color: 'blue' }} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ShoppableVideo Component', async () => {
    const data = {
      teaserTitle: 'Teaser Title',
      picture: {
        title: 'Summer Dresses Shoppable Video Picture',
        alt: 'Summer Dresses Shoppable Video Picture',
        link: 'coremedia:///image/6188/data',
      },
      link: 'coremedia:///media/6200/data',
      timeLine: {
        sequences: [
          {
            position: 4,
            startTimeMillis: 18000,
            target: {
              _id: 'coremedia:///cap/content/6196',
              teaserTitle: 'HKMX DK Sweater',
              teaserText:
                'This warm sweater from our Doutzen collection is ideal for wearing after your workout. It will keep nice and warm even on cold days. Combine with matching items from the DK collection.',
              picture: {
                title: 'Sweater',
                alt: 'Sweater',
                link: 'coremedia:///image/6226/data',
              },
              price: 42.99,
            },
          },
        ],
      },
    };
    const wrapper = shallow(
      <Fragment fragmentType="shoppablevideo" viewType="teaser" data={data} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should update after receiving new props', async () => {
    const data = {
      teaserTitle: 'The CoreMedia Content Experience Platform',
      teaserText:
        'Manage content, master digital media &amp; handle eCommerce integrations with ease.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/en/platform',
      },
      picture: {
        title: 'Lego',
        alt: 'Lego',
        link: 'coremedia:///image/2658/data',
      },
    };
    const props = {
      fragmentType: 'teaser',
      viewType: 'wide',
      data: data,
      params: { color: 'turquoise', ctaShow: true },
    };
    const wrapper = shallow(<Fragment {...props} />);
    const newProps = Object.assign(props, { viewType: 'square' });
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(newProps);
    expect(shouldUpdate).toBe(true);
  });

  it('should not update after receiving new props', async () => {
    const data = {
      teaserTitle: 'The CoreMedia Content Experience Platform',
      teaserText:
        'Manage content, master digital media &amp; handle eCommerce integrations with ease.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/en/platform',
      },
      picture: {
        title: 'Lego',
        alt: 'Lego',
        link: 'coremedia:///image/2658/data',
      },
    };
    const props = {
      fragmentType: 'teaser',
      viewType: 'wide',
      data: data,
      params: { color: 'turquoise', ctaShow: true },
    };
    const wrapper = shallow(<Fragment {...props} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(props);
    expect(shouldUpdate).toBe(false);
  });

  it('should derive new state after receiving new props', async () => {
    const data = {
      teaserTitle: 'The CoreMedia Content Experience Platform',
      teaserText:
        'Manage content, master digital media &amp; handle eCommerce integrations with ease.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/en/platform',
      },
      picture: {
        title: 'Lego',
        alt: 'Lego',
        link: 'coremedia:///image/2658/data',
      },
    };
    let props = {
      fragmentType: 'teaser',
      viewType: 'wide',
      data: data,
      params: { color: 'turquoise', ctaShow: true },
    };
    let state = {};
    let derivedState = Fragment.getDerivedStateFromProps(props, state);
    expect(derivedState).toMatchSnapshot();
    state = { ...state, ...derivedState };
    props = { ...props, viewType: 'square' };
    derivedState = Fragment.getDerivedStateFromProps(props, state);
    expect(derivedState).toMatchSnapshot();
  });

  it('should not derive new state after receiving new props', async () => {
    const data = {
      teaserTitle: 'The CoreMedia Content Experience Platform',
      teaserText:
        'Manage content, master digital media &amp; handle eCommerce integrations with ease.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/en/platform',
      },
      picture: {
        title: 'Lego',
        alt: 'Lego',
        link: 'coremedia:///image/2658/data',
      },
    };
    const props = {
      fragmentType: 'teaser',
      viewType: 'wide',
      data: data,
      params: { color: 'turquoise', ctaShow: true },
    };
    const state = Fragment.getDerivedStateFromProps(props, {});
    let derivedState = Fragment.getDerivedStateFromProps(props, state);
    expect(derivedState).toBe(null);
    derivedState = Fragment.getDerivedStateFromProps({ ...props, viewType: 'square' }, state);
    const expected = {
      Component: Teaser.Square,
      viewType: 'square',
    };
    expect(derivedState).toEqual(expected);
  });

  it('should not derive new state after receiving new props', async () => {
    const props = {
      viewType: 'wide',
    };
    const derivedState = Fragment.getDerivedStateFromProps(props, {});
    expect(derivedState).toBe(null);
  });

  it('should throw Error, if the value of prop "fragmentType" is unknown', async () => {
    const props = {
      fragmentType: 'none',
      viewType: 'any',
      data: {},
    };
    const state = {};
    const callGetDerivedStateFromProps = () => Fragment.getDerivedStateFromProps(props, state);
    expect(callGetDerivedStateFromProps).toThrowErrorMatchingSnapshot();
  });

  it('should throw Error, if the value of prop "viewType" is unknown', async () => {
    const props = {
      fragmentType: 'teaser',
      viewType: 'any',
      data: {
        teaserTitle: 'The CoreMedia Content Experience Platform',
        teaserText:
          'Manage content, master digital media &amp; handle eCommerce integrations with ease.',
        teaserTarget: {
          title: '',
          segment: '',
          link: 'https://www.coremedia.com/en/platform',
        },
        picture: {
          title: 'Lego',
          alt: 'Lego',
          link: 'coremedia:///image/2658/data',
        },
      },
    };
    const state = {};
    const callGetDerivedStateFromProps = () => Fragment.getDerivedStateFromProps(props, state);
    expect(callGetDerivedStateFromProps).toThrowErrorMatchingSnapshot();
  });

  it('should render null, if fragmentType and viewType are undefined', async () => {
    const shallowFragment = shallow(<Fragment fragmentType={undefined} viewType={undefined} />);

    expect(shallowFragment.equals(null)).toBe(true);
  });
});
