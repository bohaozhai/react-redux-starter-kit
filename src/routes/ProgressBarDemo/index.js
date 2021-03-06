import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'demo',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const ProgressBarDemo = require('./containers/ProgressBarDemoContainer').default;
      const reducer = require('./modules/ProgressBarDemoReducer').default;

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'demo', reducer });

      /*  Return getComponent   */
      cb(null, ProgressBarDemo);

      /* Webpack named bundle   */
    }, 'demo');
  }
});
