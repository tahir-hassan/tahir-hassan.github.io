require(['react', 'react-dom'], function(React, ReactDOM) {
    ReactDOM.render(
        React.createElement('p', {}, 'Hello, React Require AMD!'),
        document.getElementById('root')
    );
});