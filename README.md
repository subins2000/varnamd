## Build instructions

```
git submodule update --init
cd libvarnam/libvarnam && cmake . && make && ln -s $(realpath libvarnamstatic.a) libvarnam.a && cd -
./varnamd # Yaaay!
```

To ship `varnamd`, it needs the `ui` folder to be in the same path.