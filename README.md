# Vokal Test

This repository contains the frontend project code for the vokal test "Inspiration". You can follow the designs [here](https://www.figma.com/file/LAedgvHPOuCxp4s1vktfyB/Vokal-TEST?type=design&node-id=0-1&mode=design&t=PpqpyUMMxjvX4Upu-0).

## What is Inspiration by Vokal?

Transform your living spaces with Inspiration by Vokal, the ultimate tool for interior design inspiration. Whether you're planning a modern makeover or embracing a traditional aesthetic, our page provides a curated collection of stunning images to ignite your creativity.

## How to use it?

The project was created using:
- Node version 20.11.1
- ReactJS 18.3
- Typescript 5.2
- Vite 5.3
- Material UI

To launch it in local, is recommended to set the Node version first using `nvm` and then installing dependencies usign `npm`:

```bash
nvm use
```

```bash
npm i
```

Then you can launch the project by running `npm run dev`.

## More details about the project
The page is created using a component centric strategy by splitting all the common components (like Header and Footer) components in a general purpose folder meanwhile all the specific components for the Showcase page is associated to it.

In order to make the showcase filter's state available in depper and higher components it was used Contex API React feature. It's being exposed by using a custom hook (useFilter) in case it's required to manage the filters anywhere else in the application.

Finally, the images resources are get using a OOP service class: ImagesService. The usage of this class, in the moment, is to return a filtered array of images based on the current filters state. The service strategy (or provider strategy) enables to separate the concerns in the application: the images rendered (presentation layer) does nothing to do with the how we get them (bussiness and third party logic). All of this is supported by the usage of interfaces to translate third party DTOs and internal bussiness models. The usage of OOP allows to have a more tested oriented code (easily executable with other tools like vitest -similar to jest-).

## Deployed on
You can check the page deployed on TBD.
