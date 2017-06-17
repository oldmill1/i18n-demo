var fs = require('fs');
var glob = require('glob');
var mkdirp = require('mkdirp')

// Merge all english translations specified and extracted by babel-plugin-react-intl
const getDefaultMessages = () => {
    return glob.sync('./build/messages/src/**/*.json')
        .map((filename) => fs.readFileSync(filename, 'utf8'))
        .map((file) => JSON.parse(file))
        .reduce((collection, descriptors) => {
            descriptors.forEach((descriptor) => {
                if (collection.hasOwnProperty(descriptor.id)) {
                    throw new Error('Duplicate message id: ' + descriptor.id);
                }
                collection[descriptor.id] = descriptor.defaultMessage;
            });
            return collection;
        }, {});
}

mkdirp.sync('./build/messages/');
fs.writeFileSync('./build/messages/en.json', JSON.stringify(getDefaultMessages(), null, 2));
