(self.webpackChunkwsl_gui = self.webpackChunkwsl_gui || []).push([
  [179],
  {
    87764: (module) => {
      function webpackEmptyAsyncContext(req) {
        return Promise.resolve().then(() => {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (webpackEmptyAsyncContext.keys = () => []),
        (webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext),
        (webpackEmptyAsyncContext.id = 87764),
        (module.exports = webpackEmptyAsyncContext);
    },
    88802: (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = 88802),
        (module.exports = webpackEmptyContext);
    },
    33363: (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = 33363),
        (module.exports = webpackEmptyContext);
    },
    24455: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { K: () => CanActionPipe });
      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70655),
        _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35752),
        _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(44124);
      let CanActionPipe = class CanActionPipe {
        transform(action, state) {
          switch (((action = action.toLowerCase()), state)) {
            case _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.wi.Created:
              return 'start' === action;
            case _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.wi.Restarting:
            case _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.wi.Running:
              return (
                'stop' === action || 'restart' === action || 'pause' === action
              );
            case _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.wi.Removing:
              return !1;
            case _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.wi.Paused:
              return 'pause' !== action && 'start' !== action;
            case _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.wi.Exited:
              return 'start' === action;
            case _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.wi.Dead:
              return !1;
          }
        }
      };
      CanActionPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.gn)(
        [
          (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
            name: 'canAction',
          }),
        ],
        CanActionPipe
      );
    },
    89186: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        e: () => ContainerItemComponent,
      });
      var _a,
        tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70655),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35752),
        _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(44124);
      let ContainerItemComponent = class ContainerItemComponent {
        constructor() {
          this.executeAction =
            new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }
        onExecute(action) {
          this.executeAction.emit({ id: this.container.ID, action });
        }
      };
      (0, tslib__WEBPACK_IMPORTED_MODULE_2__.gn)(
        [
          (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
          (0, tslib__WEBPACK_IMPORTED_MODULE_2__.w6)(
            'design:type',
            'function' ==
              typeof (_a =
                void 0 !==
                  _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.ContainerInfo &&
                _wsl_gui_models__WEBPACK_IMPORTED_MODULE_0__.ContainerInfo)
              ? _a
              : Object
          ),
        ],
        ContainerItemComponent.prototype,
        'container',
        void 0
      ),
        (0, tslib__WEBPACK_IMPORTED_MODULE_2__.gn)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(),
            (0, tslib__WEBPACK_IMPORTED_MODULE_2__.w6)('design:type', Object),
          ],
          ContainerItemComponent.prototype,
          'executeAction',
          void 0
        ),
        (ContainerItemComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.gn)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
              selector: 'wsl-gui-container-item',
              template: (
                __webpack_require__(69331).default || __webpack_require__(69331)
              ).length
                ? __webpack_require__(69331).default ||
                  __webpack_require__(69331)
                : '',
              styles: [
                (
                  __webpack_require__(11141).default ||
                  __webpack_require__(11141)
                ).length
                  ? __webpack_require__(11141).default ||
                    __webpack_require__(11141)
                  : '',
              ],
            }),
          ],
          ContainerItemComponent
        ));
    },
    44124: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var Events, ContainerStates;
      __webpack_require__.d(__webpack_exports__, {
        wi: () => ContainerStates,
        zW: () => Events,
      }),
        (function (Events) {
          (Events.GetImages = 'get-images'),
            (Events.SendImages = 'images'),
            (Events.GetContainers = 'get-containers'),
            (Events.SendContainers = 'containers'),
            (Events.ExecuteContainerCmd = 'execute-container'),
            (Events.ContainerCmdExecuted = 'container-executed'),
            (Events.GetSettings = 'get-settings'),
            (Events.ReturnGetSettings = 'return-get-settings'),
            (Events.SetSettings = 'set-settings'),
            (Events.LogMessage = 'log-message');
        })(Events || (Events = {})),
        (function (ContainerStates) {
          (ContainerStates.Created = 'created'),
            (ContainerStates.Restarting = 'restarting'),
            (ContainerStates.Running = 'running'),
            (ContainerStates.Removing = 'removing'),
            (ContainerStates.Paused = 'paused'),
            (ContainerStates.Exited = 'exited'),
            (ContainerStates.Dead = 'dead');
        })(ContainerStates || (ContainerStates = {}));
      new (__webpack_require__(35752).InjectionToken)(
        'Object with app settings'
      );
    },
    43141: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          Primary: () => Primary,
        });
      var _container_item_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(89186),
        _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(70001),
        _wsl_gui_models__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(44124),
        _can_action_pipe__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(24455);
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'containers / container item',
          component: _container_item_component__WEBPACK_IMPORTED_MODULE_0__.e,
          decorators: [
            (0, _storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)(
              {
                declarations: [
                  _container_item_component__WEBPACK_IMPORTED_MODULE_0__.e,
                  _can_action_pipe__WEBPACK_IMPORTED_MODULE_3__.K,
                ],
              }
            ),
          ],
        },
        Primary = ((args) => ({ props: args })).bind({});
      (Primary.args = {
        container: {
          Command: '',
          CreatedAt: '',
          ID: '1',
          Image: '',
          Labels: '',
          LocalVolumes: '',
          Mounts: '',
          Names: 'Item 1',
          Networks: 'bridge',
          Ports: '',
          RunningFor: '3 days',
          Size: '13gb',
          State: _wsl_gui_models__WEBPACK_IMPORTED_MODULE_2__.wi.Running,
          Status: 'Up For 3 Days',
        },
      }),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source:
                '(\r\n  args: ContainerItemComponent\r\n) => ({\r\n  props: args,\r\n})',
            },
          },
          Primary.parameters
        ));
    },
    38285: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          default: () => container_page_component_stories,
        });
      var client = __webpack_require__(70001),
        src = __webpack_require__(44124),
        can_action_pipe = __webpack_require__(24455),
        container_item_component = __webpack_require__(89186),
        tslib_es6 = __webpack_require__(70655),
        core = __webpack_require__(35752),
        ngrx_store = __webpack_require__(79200);
      const loadContainers = (0, ngrx_store.PH)('[Containers] Load Containers'),
        containersLoaded = (0, ngrx_store.PH)(
          '[Containers] Containers Loaded',
          (0, ngrx_store.Ky)()
        ),
        performAction = (0, ngrx_store.PH)(
          '[Containers] Perform Action',
          (0, ngrx_store.Ky)()
        ),
        actionPerformed = (0, ngrx_store.PH)('[Containers] Action Performed'),
        selectContainersState =
          ((0, ngrx_store.Lq)(
            { Containers: [], Loading: !1 },
            (0, ngrx_store.on)(containersLoaded, (state, data) =>
              Object.assign({}, state, { Containers: data.containers })
            ),
            (0, ngrx_store.on)(performAction, (state) =>
              Object.assign({}, state, { Loading: !0 })
            ),
            (0, ngrx_store.on)(actionPerformed, (state) =>
              Object.assign({}, state, { Loading: !1 })
            )
          ),
          (0, ngrx_store.ZF)('containers')),
        getContainers = (0, ngrx_store.P1)(
          selectContainersState,
          (state) => state.Containers
        ),
        getIsLoading = (0, ngrx_store.P1)(
          selectContainersState,
          (state) => state.Loading
        );
      var interval = __webpack_require__(3969),
        Observable = __webpack_require__(79821);
      let DockerService = class DockerService {
        constructor() {
          this.win = window;
        }
        get settings() {
          return this._settings;
        }
        getSettings() {
          return new Promise((resolve, reject) => {
            this.win.api.electronIpcOnce(
              src.zW.ReturnGetSettings,
              (settings) => {
                (this._settings = settings), resolve();
              }
            ),
              this.win.api.GetSettings();
          });
        }
        getContainers() {
          return new Observable.y((subscriber) => {
            this.win.api.electronIpcOnce(
              src.zW.SendContainers,
              (event, arg) => {
                try {
                  subscriber.next(JSON.parse(`[${arg}]`));
                } catch (ex) {
                  subscriber.next(ex);
                } finally {
                  subscriber.complete();
                }
              }
            ),
              this.win.api.getContainers();
          });
        }
        performContainerAction(id, action) {
          return new Observable.y((subscriber) => {
            this.win.api.electronIpcOnce(
              src.zW.ContainerCmdExecuted,
              (event, arg) => {
                subscriber.next(arg), subscriber.complete();
              }
            ),
              this.win.api.ExecuteContainerCmd(id, action);
          });
        }
      };
      var _a, _b;
      DockerService = (0, tslib_es6.gn)(
        [(0, core.Injectable)({ providedIn: 'root' })],
        DockerService
      );
      let ContainersFacade = class ContainersFacade {
        constructor(store, dockerService) {
          (this.store = store),
            (this.dockerService = dockerService),
            (this.loading$ = this.store.pipe((0, ngrx_store.Ys)(getIsLoading))),
            (this.containers$ = this.store.pipe(
              (0, ngrx_store.Ys)(getContainers)
            )),
            this.init();
        }
        init() {
          this.store.dispatch(loadContainers()),
            (0, interval.F)(
              60 * this.dockerService.settings.refresh * 1e3
            ).subscribe(() => {
              this.store.dispatch(loadContainers());
            });
        }
        performAction(id, action) {
          this.store.dispatch(performAction({ id, action }));
        }
      };
      var container_page_component_a, container_page_component_b;
      ContainersFacade = (0, tslib_es6.gn)(
        [
          (0, core.Injectable)({ providedIn: 'root' }),
          (0, tslib_es6.w6)('design:paramtypes', [
            'function' ==
            typeof (_a = void 0 !== ngrx_store.yh && ngrx_store.yh)
              ? _a
              : Object,
            'function' ==
            typeof (_b = void 0 !== DockerService && DockerService)
              ? _b
              : Object,
          ]),
        ],
        ContainersFacade
      );
      let ContainerPageComponent = class ContainerPageComponent {
        constructor(facade, cd) {
          (this.facade = facade), (this.cd = cd);
        }
        action(data) {
          const { id, action } = data;
          this.facade.performAction(id, action);
        }
      };
      ContainerPageComponent = (0, tslib_es6.gn)(
        [
          (0, core.Component)({
            selector: 'wsl-gui-container-page',
            template: (
              __webpack_require__(613).default || __webpack_require__(613)
            ).length
              ? __webpack_require__(613).default || __webpack_require__(613)
              : '',
            styles: [
              (__webpack_require__(11574).default || __webpack_require__(11574))
                .length
                ? __webpack_require__(11574).default ||
                  __webpack_require__(11574)
                : '',
            ],
          }),
          (0, tslib_es6.w6)('design:paramtypes', [
            'function' ==
            typeof (container_page_component_a =
              void 0 !== ContainersFacade && ContainersFacade)
              ? container_page_component_a
              : Object,
            'function' ==
            typeof (container_page_component_b =
              void 0 !== core.ChangeDetectorRef && core.ChangeDetectorRef)
              ? container_page_component_b
              : Object,
          ]),
        ],
        ContainerPageComponent
      );
      var cd_pipe_a,
        cd_pipe_b,
        of = __webpack_require__(30223),
        common = __webpack_require__(54265);
      let CdPipe = class CdPipe {
        constructor(zone, cd) {
          (this.zone = zone), (this.cd = cd), (this.timeoutId = null);
        }
        transform(value) {
          return (
            (this.timeoutId = setTimeout(() => {
              (this.timeoutId = null), this.cd.detectChanges();
            }, 400)),
            value
          );
        }
        ngOnDestroy() {
          this.timeoutId &&
            (clearTimeout(this.timeoutId), (this.timeoutId = null));
        }
      };
      CdPipe = (0, tslib_es6.gn)(
        [
          (0, core.Pipe)({ name: 'cd' }),
          (0, tslib_es6.w6)('design:paramtypes', [
            'function' ==
            typeof (cd_pipe_a = void 0 !== core.NgZone && core.NgZone)
              ? cd_pipe_a
              : Object,
            'function' ==
            typeof (cd_pipe_b =
              void 0 !== core.ChangeDetectorRef && core.ChangeDetectorRef)
              ? cd_pipe_b
              : Object,
          ]),
        ],
        CdPipe
      );
      let CdCoreModule = class CdCoreModule {};
      CdCoreModule = (0, tslib_es6.gn)(
        [
          (0, core.NgModule)({
            imports: [common.ez],
            declarations: [CdPipe],
            exports: [CdPipe],
          }),
        ],
        CdCoreModule
      );
      const container_page_component_stories = {
          title: 'containers / container page',
          component: ContainerPageComponent,
          decorators: [
            (0, client.moduleMetadata)({
              imports: [CdCoreModule],
              declarations: [
                container_item_component.e,
                can_action_pipe.K,
                ContainerPageComponent,
              ],
              providers: [
                {
                  provide: DockerService,
                  useClass: class MockDockerService {
                    getContainers() {
                      return (0, of.of)([
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '1',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 1',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Running,
                          Status: 'Up For 3 Days',
                        },
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '2',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 2',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Paused,
                          Status: 'Up For 3 Days',
                        },
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '3',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 2',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Restarting,
                          Status: 'Up For 3 Days',
                        },
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '4',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 2',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Exited,
                          Status: 'Up For 3 Days',
                        },
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '5',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 2',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Paused,
                          Status: 'Up For 3 Days',
                        },
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '6',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 2',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Paused,
                          Status: 'Up For 3 Days',
                        },
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '7',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 2',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Paused,
                          Status: 'Up For 3 Days',
                        },
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '8',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 2',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Paused,
                          Status: 'Up For 3 Days',
                        },
                        {
                          Command: '',
                          CreatedAt: '',
                          ID: '9',
                          Image: '',
                          Labels: '',
                          LocalVolumes: '',
                          Mounts: '',
                          Names: 'Item 2',
                          Networks: 'bridge',
                          Ports: '',
                          RunningFor: '3 days',
                          Size: '13gb',
                          State: src.wi.Paused,
                          Status: 'Up For 3 Days',
                        },
                      ]);
                    }
                    performContainerAction(id, action) {
                      return (0, of.of)(id);
                    }
                  },
                },
                {
                  provide: ContainersFacade,
                  useClass: class MockFacade {
                    constructor() {
                      (this.loading$ = (0, of.of)(!1)),
                        (this.containers$ = (0, of.of)([
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '1',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 1',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Running,
                            Status: 'Up For 3 Days',
                          },
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '2',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 2',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Paused,
                            Status: 'Up For 3 Days',
                          },
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '3',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 2',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Restarting,
                            Status: 'Up For 3 Days',
                          },
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '4',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 2',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Exited,
                            Status: 'Up For 3 Days',
                          },
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '5',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 2',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Paused,
                            Status: 'Up For 3 Days',
                          },
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '6',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 2',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Paused,
                            Status: 'Up For 3 Days',
                          },
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '7',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 2',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Paused,
                            Status: 'Up For 3 Days',
                          },
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '8',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 2',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Paused,
                            Status: 'Up For 3 Days',
                          },
                          {
                            Command: '',
                            CreatedAt: '',
                            ID: '9',
                            Image: '',
                            Labels: '',
                            LocalVolumes: '',
                            Mounts: '',
                            Names: 'Item 2',
                            Networks: 'bridge',
                            Ports: '',
                            RunningFor: '3 days',
                            Size: '13gb',
                            State: src.wi.Paused,
                            Status: 'Up For 3 Days',
                          },
                        ]));
                    }
                    init() {}
                    performAction(id, action) {}
                  },
                },
              ],
            }),
          ],
        },
        Primary = ((args) => ({ props: args })).bind({});
      (Primary.args = {}),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source:
                '(\r\n  args: ContainerPageComponent\r\n) => ({\r\n  props: args,\r\n})',
            },
          },
          Primary.parameters
        ));
    },
    49825: (module, __unused_webpack_exports, __webpack_require__) => {
      'use strict';
      (module = __webpack_require__.nmd(module)),
        (0, __webpack_require__(70001).configure)(
          [
            __webpack_require__(33363),
            __webpack_require__(88802),
            __webpack_require__(76685),
          ],
          module,
          !1
        );
    },
    19709: () => {},
    41724: (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__(47941),
        __webpack_require__(82526),
        __webpack_require__(57327),
        __webpack_require__(38880),
        __webpack_require__(89554),
        __webpack_require__(54747),
        __webpack_require__(49337),
        __webpack_require__(33321),
        __webpack_require__(69070);
      var C_code_wsl_gui_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(78880),
        C_code_wsl_gui_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(23827),
        C_code_wsl_gui_apps_storybook_wrapper_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(19709);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(
        C_code_wsl_gui_apps_storybook_wrapper_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__
      ).forEach(function (key) {
        var value =
          C_code_wsl_gui_apps_storybook_wrapper_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__[
            key
          ];
        switch (key) {
          case 'args':
          case 'argTypes':
            return C_code_wsl_gui_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_10__.kg.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return (0,
              C_code_wsl_gui_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_11__.$9)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return (0,
              C_code_wsl_gui_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_11__.HZ)(loader, !1);
            });
          case 'parameters':
            return (0,
            C_code_wsl_gui_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_11__.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return (0,
              C_code_wsl_gui_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_11__.My)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return (0,
              C_code_wsl_gui_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_11__._C)(enhancer);
            });
          case 'render':
            return (0,
            C_code_wsl_gui_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_11__.$P)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (
              (v[key] = value),
              (0,
              C_code_wsl_gui_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_11__.h1)(
                v,
                !1
              )
            );
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    30100: (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__(70001);
    },
    14127: (module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(23645),
        ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        )()(function (i) {
          return i[1];
        });
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        '/* You can add global styles to this file, and also import other style files */',
        '',
      ]);
      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
    },
    69331: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ =
        '<article class="slds-tile">\n  <div class="slds-grid slds-grid_align-spread slds-has-flexi-truncate">\n    <h3\n      class="slds-tile__title slds-truncate"\n      title="{{ \'Container Name: \' + container.Names }}"\n    >\n      <span>{{ container.Names }}</span>\n    </h3>\n    <div class="slds-shrink-none">\n      <button\n        *ngIf="\'stop\' | canAction: container.State"\n        (click)="onExecute(\'stop\')"\n        class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-brand"\n        title="Stop"\n      >\n        <svg class="slds-button__icon" aria-hidden="true">\n          <use\n            xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#stop"\n          ></use>\n        </svg>\n        <span class="slds-assistive-text">Stop</span>\n      </button>\n      <button\n        *ngIf="\'start\' | canAction: container.State"\n        (click)="onExecute(\'start\')"\n        class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-brand"\n        title="Start"\n      >\n        <svg class="slds-button__icon" aria-hidden="true">\n          <use\n            xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#play"\n          ></use>\n        </svg>\n        <span class="slds-assistive-text">Start</span>\n      </button>\n      <button\n        *ngIf="\'restart\' | canAction: container.State"\n        (click)="onExecute(\'restart\')"\n        class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-brand"\n        title="Restart"\n      >\n        <svg class="slds-button__icon" aria-hidden="true">\n          <use\n            xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#refresh"\n          ></use>\n        </svg>\n        <span class="slds-assistive-text">Restart</span>\n      </button>\n      <button\n        *ngIf="\'pause\' | canAction: container.State"\n        (click)="onExecute(\'pause\')"\n        class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-brand"\n        title="Pause"\n      >\n        <svg class="slds-button__icon" aria-hidden="true">\n          <use\n            xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#pause_alt"\n          ></use>\n        </svg>\n        <span class="slds-assistive-text">Pause</span>\n      </button>\n      <button\n        *ngIf="\'unpause\' | canAction: container.State"\n        (click)="onExecute(\'unpause\')"\n        class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-border-filled"\n        title="Unpause"\n      >\n        <svg class="slds-button__icon" aria-hidden="true">\n          <use\n            xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#pause_alt"\n          ></use>\n        </svg>\n        <span class="slds-assistive-text">Unpause</span>\n      </button>\n    </div>\n  </div>\n\n  <div class="slds-tile__detail">\n    <dl class="slds-list_horizontal slds-wrap">\n      <dt\n        class="slds-item_label slds-text-color_weak slds-truncate"\n        title="Status"\n      >\n        Status:\n      </dt>\n      <dd\n        class="slds-item_detail slds-truncate"\n        title="{{ \'Status: \' + container.Status }}"\n      >\n        {{ container.Status }}\n      </dd>\n      <dt\n        class="slds-item_label slds-text-color_weak slds-truncate"\n        title="Run Date"\n      >\n        Run Date:\n      </dt>\n      <dd\n        class="slds-item_detail slds-truncate"\n        title="{{ \'Run Date: \' + container.RunningFor }}"\n      >\n        {{ container.RunningFor }}\n      </dd>\n      <dt\n        class="slds-item_label slds-text-color_weak slds-truncate"\n        title="State"\n      >\n        State:\n      </dt>\n      <dd\n        class="slds-item_detail slds-truncate"\n        title="{{ \'State: \' + container.State }}"\n      >\n        {{ container.State }}\n      </dd>\n    </dl>\n  </div>\n</article>\n';
    },
    613: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ =
        '<div class="slds-container_fluid slds-scrollable_y">\n  <div *ngIf="facade.loading$ | async" class="slds-spinner_container">\n    <ngl-spinner size="large" variant="brand"></ngl-spinner>\n  </div>\n  <ul class="slds-has-dividers_around-space">\n    <li\n      class="slds-item slds-theme_default"\n      *ngFor="let container of facade.containers$ | async | cd"\n    >\n      <wsl-gui-container-item\n        [container]="container"\n        (executeAction)="action($event)"\n      ></wsl-gui-container-item>\n    </li>\n  </ul>\n</div>\n';
    },
    14809: (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(93379),
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7795),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(90569),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(3565),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(19216),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(44589),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_rules_1_use_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_rules_1_use_1_styles_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(14127),
        options = {};
      (options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()),
        (options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()),
        (options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head'
          )),
        (options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()),
        (options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_rules_1_use_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_rules_1_use_1_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z,
        options
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_rules_1_use_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_rules_1_use_1_styles_scss__WEBPACK_IMPORTED_MODULE_6__.Z &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_rules_1_use_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_rules_1_use_1_styles_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_rules_1_use_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_rules_1_use_1_styles_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals;
    },
    76685: (module, __unused_webpack_exports, __webpack_require__) => {
      var map = {
        './libs/containers/src/lib/container-item/container-item.component.stories.ts': 43141,
        './libs/containers/src/lib/container-page/container-page.component.stories.ts': 38285,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 76685);
    },
    11141: (module) => {
      'use strict';
      module.exports = '';
    },
    11574: (module) => {
      'use strict';
      module.exports = '';
    },
    24654: () => {},
    4147: (module) => {
      'use strict';
      module.exports = { i8: '0.0.0' };
    },
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(
      0,
      [986],
      () => (
        __webpack_exec__(37707),
        __webpack_exec__(99669),
        __webpack_exec__(30100),
        __webpack_exec__(52459),
        __webpack_exec__(26432),
        __webpack_exec__(84873),
        __webpack_exec__(62853),
        __webpack_exec__(81953),
        __webpack_exec__(22609),
        __webpack_exec__(64049),
        __webpack_exec__(21424),
        __webpack_exec__(41724),
        __webpack_exec__(49825),
        __webpack_exec__(14809),
        __webpack_exec__(35170),
        __webpack_exec__(62055)
      )
    );
    __webpack_require__.O();
  },
]);
