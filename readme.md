# Flutter generator fg-cli CLI

This is a CLI tool to generate Flutter files including Model, screen, widget... for your Flutter project.
It's buit using https://github.com/infinitered/gluegun inpired by https://github.com/infinitered/ignite 

# Usage

- Clone this repository
- Open terminal and run this command to active the CLI

```shell
yarn link
```

- Copy the folder `FG/templates` to your Flutter project root

## Built-in generators
- Run the bellow commands to generate Models, Screens, or List item.
- The default template files are used for Flutter GetX project, you can modify these files to match with your project templates
  
# To generate a model `AbcXyz` in the folder `lib/models/abc_xyz`: 
```shell
fg-cli generate model AbcXyz
```

# To generate a screen `AbcXyz` in the folder `lib/screens/abc_xyz`: 
```shell
fg-cli generate screen AbcXyz
```

# To generate a list item `AbcXyz` in the folder `lib/list_items/abc_xyz`: 
```shell
fg-cli generate list_item AbcXyz
```

## Making your own generators
- Feel free to modify the templates files in the folder `FG/templates`.
- Your generators live in your app, in `FG/templates/*`. To make a new generator, go look at the ones that are there when you start your app. You'll see that they have `*.ejs` files (which get interpreted when you generate them).

```shell
fg-cli g screen Settings
```

This will copy over any files in `FG/templates/screen/*` to `lib/screens/settings/*` and process any `.ejs` templates at the same time.

Props are passed into the ejs templates when you run the generator.

```
{
  camelCaseName: string     // AbcXyz => abcXyz
  kebabCaseName: string     // AbcXyz => abc_xyz
  pascalCaseName: string    // AbcXyz => AbcXyz
  filename: string          // AbcXyz => abc_xyz.dart
}
```

You can use them in a template with `<%= props.camelCaseName %>`.

## Customizing your CLI

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

# License

MIT - see LICENSE

