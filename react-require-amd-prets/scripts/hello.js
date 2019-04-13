define(['require', 'exports', 'react', 'react-dom'], function(require, exports, React, ReactDOM) {
    ReactDOM.render(
        React.createElement('p', {}, 'Hello, React Require AMD!'),
        document.getElementById('root')
    );
});