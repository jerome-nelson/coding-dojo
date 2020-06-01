## Publishing Changes

* Changes are versioned using LernaJS on merge to master
    - Changes to `.md` or `.spec.ts` files will not bump packages.
    - Conventional commit specifications should be followed

* On commit
    - we use the (Conventional Commit Guidelines)[https://www.conventionalcommits.org/en/v1.0.0/#summary], husky will prevent incorrect messages from being committed

* Testing
    - Testing .js/ts uses Jest
    - React Testing - uses React Testing