/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.quota = 'quota';
        this.product = 'product';
    }
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(ProgressBarComponent.prototype, "progressType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._progressType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "progressValueOne", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressValueOne;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._progressValueOne = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "iconTop", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._progressIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "progressValueTwo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressValueTwo;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._progressValueTwo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "typeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressType === 'quota' ? 'Cotas' : 'Produtos';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "getFirstBottomLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressType === 'quota' ? 'Valor Resgatado' : 'Presenteados';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "getSecondBottomLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressType === 'quota' ? 'Valor Presenteado' : 'Adicionados';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "progressIconImage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "progressIconSrc", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progressType === 'quota' ? 'assets/images/ico-plane-black.svg' : 'assets/images/ico-product.svg';
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lc-progress-bar',
                    template: "<div>\n  <div class=\"icon\" *ngIf=\"progressIconImage\">\n    <figure>\n      <img [src]=\"progressIconSrc\" alt=\"\">\n    </figure>\n    <p>\n      {{ typeName }}\n    </p>\n  </div>\n  <div class=\"texts\">\n    <span *ngIf=\"_progressType !== quota\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'pink' : _progressType === quota\n      }\">{{\n      progressValueOne }}</span>\n    <span *ngIf=\"_progressType !== quota\">{{ progressValueTwo }}</span>\n\n    <span *ngIf=\"_progressType === quota\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'pink' : _progressType === quota\n      }\">{{\n      progressValueOne | currency:'BRL' }}\n    </span>\n    <span *ngIf=\"_progressType === 'quota'\">{{ progressValueTwo | currency:'BRL' }}\n    </span>\n  </div>\n  <mat-progress-bar mode=\"determinate\" value=\"40\" [ngClass]=\"\n    {\n    'green' : _progressType === product,\n    'pink' : _progressType === quota\n    }\"></mat-progress-bar>\n  <div class=\"texts\">\n    <span class=\"bottom\" [ngClass]=\"\n      {\n      'green' : _progressType === product,\n      'quota' : _progressType === quota\n      }\">{{\n      getFirstBottomLabel }}</span>\n    <span class=\"bottom\">{{ getSecondBottomLabel }}</span>\n  </div>\n</div>\n\n\n<div class=\"second-progress-bar\">\n  <div class=\"texts\">\n    <span *ngIf=\"_progressType !== quota\" class=\"blue\">{{\n      progressValueOne }}</span>\n    <span *ngIf=\"_progressType !== quota\">{{ progressValueTwo }}</span>\n\n    <span *ngIf=\"_progressType === quota\" class=\"blue\">{{\n      progressValueOne | currency:'BRL' }}\n    </span>\n    <span *ngIf=\"_progressType === quota\">{{ progressValueTwo | currency:'BRL' }}\n    </span>\n  </div>\n  <mat-progress-bar mode=\"determinate\" value=\"40\" class=\"blue\"></mat-progress-bar>\n  <div class=\"texts\">\n    <span class=\"bottom blue\">{{\n      getFirstBottomLabel }}</span>\n    <span class=\"bottom\">{{ getSecondBottomLabel }}</span>\n  </div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    ProgressBarComponent.ctorParameters = function () { return []; };
    ProgressBarComponent.propDecorators = {
        progressType: [{ type: Input }],
        progressValueOne: [{ type: Input }],
        iconTop: [{ type: Input }],
        progressValueTwo: [{ type: Input }]
    };
    return ProgressBarComponent;
}());
export { ProgressBarComponent };
if (false) {
    /** @type {?} */
    ProgressBarComponent.prototype._progressType;
    /** @type {?} */
    ProgressBarComponent.prototype._progressValueOne;
    /** @type {?} */
    ProgressBarComponent.prototype._progressValueTwo;
    /** @type {?} */
    ProgressBarComponent.prototype._progressIcon;
    /** @type {?} */
    ProgressBarComponent.prototype.quota;
    /** @type {?} */
    ProgressBarComponent.prototype.product;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxjLWRldmtpdC8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBK0V2RDtxQkFIUSxPQUFPO3VCQUNMLFNBQVM7S0FFRjs7OztJQUVqQix1Q0FBUTs7O0lBQVI7S0FDQztJQUVELHNCQUFhLDhDQUFZOzs7OztRQUF6QixVQUEwQixLQUFhO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCOzs7T0FBQTtJQUVELHNCQUFhLGtEQUFnQjs7OztRQXdCN0I7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9COzs7OztRQTFCRCxVQUE4QixLQUFhO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7U0FDaEM7OztPQUFBO0lBRUQsc0JBQWEseUNBQU87Ozs7O1FBQXBCLFVBQXFCLEtBQWM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBRUQsc0JBQWEsa0RBQWdCOzs7O1FBb0I3QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7Ozs7O1FBdEJELFVBQThCLEtBQWE7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztTQUNoQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBUTs7OztRQUFaO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztTQUM5RDs7O09BQUE7SUFFRCxzQkFBSSxxREFBbUI7Ozs7UUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7U0FDNUU7OztPQUFBO0lBRUQsc0JBQUksc0RBQW9COzs7O1FBQXhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1NBQzdFOzs7T0FBQTtJQVVELHNCQUFJLG1EQUFpQjs7OztRQUFyQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCOzs7T0FBQTtJQUVELHNCQUFJLGlEQUFlOzs7O1FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUE7U0FDOUc7OztPQUFBOztnQkE1SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxpL0RBZ0VYO2lCQUNBOzs7OzsrQkFlRSxLQUFLO21DQUlMLEtBQUs7MEJBSUwsS0FBSzttQ0FJTCxLQUFLOzsrQkFoR1I7O1NBc0VhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYy1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gIDxkaXYgY2xhc3M9XCJpY29uXCIgKm5nSWY9XCJwcm9ncmVzc0ljb25JbWFnZVwiPlxuICAgIDxmaWd1cmU+XG4gICAgICA8aW1nIFtzcmNdPVwicHJvZ3Jlc3NJY29uU3JjXCIgYWx0PVwiXCI+XG4gICAgPC9maWd1cmU+XG4gICAgPHA+XG4gICAgICB7eyB0eXBlTmFtZSB9fVxuICAgIDwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0c1wiPlxuICAgIDxzcGFuICpuZ0lmPVwiX3Byb2dyZXNzVHlwZSAhPT0gcXVvdGFcIiBbbmdDbGFzc109XCJcbiAgICAgIHtcbiAgICAgICdncmVlbicgOiBfcHJvZ3Jlc3NUeXBlID09PSBwcm9kdWN0LFxuICAgICAgJ3BpbmsnIDogX3Byb2dyZXNzVHlwZSA9PT0gcXVvdGFcbiAgICAgIH1cIj57e1xuICAgICAgcHJvZ3Jlc3NWYWx1ZU9uZSB9fTwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgIT09IHF1b3RhXCI+e3sgcHJvZ3Jlc3NWYWx1ZVR3byB9fTwvc3Bhbj5cblxuICAgIDxzcGFuICpuZ0lmPVwiX3Byb2dyZXNzVHlwZSA9PT0gcXVvdGFcIiBbbmdDbGFzc109XCJcbiAgICAgIHtcbiAgICAgICdncmVlbicgOiBfcHJvZ3Jlc3NUeXBlID09PSBwcm9kdWN0LFxuICAgICAgJ3BpbmsnIDogX3Byb2dyZXNzVHlwZSA9PT0gcXVvdGFcbiAgICAgIH1cIj57e1xuICAgICAgcHJvZ3Jlc3NWYWx1ZU9uZSB8IGN1cnJlbmN5OidCUkwnIH19XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiX3Byb2dyZXNzVHlwZSA9PT0gJ3F1b3RhJ1wiPnt7IHByb2dyZXNzVmFsdWVUd28gfCBjdXJyZW5jeTonQlJMJyB9fVxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJkZXRlcm1pbmF0ZVwiIHZhbHVlPVwiNDBcIiBbbmdDbGFzc109XCJcbiAgICB7XG4gICAgJ2dyZWVuJyA6IF9wcm9ncmVzc1R5cGUgPT09IHByb2R1Y3QsXG4gICAgJ3BpbmsnIDogX3Byb2dyZXNzVHlwZSA9PT0gcXVvdGFcbiAgICB9XCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICA8ZGl2IGNsYXNzPVwidGV4dHNcIj5cbiAgICA8c3BhbiBjbGFzcz1cImJvdHRvbVwiIFtuZ0NsYXNzXT1cIlxuICAgICAge1xuICAgICAgJ2dyZWVuJyA6IF9wcm9ncmVzc1R5cGUgPT09IHByb2R1Y3QsXG4gICAgICAncXVvdGEnIDogX3Byb2dyZXNzVHlwZSA9PT0gcXVvdGFcbiAgICAgIH1cIj57e1xuICAgICAgZ2V0Rmlyc3RCb3R0b21MYWJlbCB9fTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImJvdHRvbVwiPnt7IGdldFNlY29uZEJvdHRvbUxhYmVsIH19PC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbjxkaXYgY2xhc3M9XCJzZWNvbmQtcHJvZ3Jlc3MtYmFyXCI+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0c1wiPlxuICAgIDxzcGFuICpuZ0lmPVwiX3Byb2dyZXNzVHlwZSAhPT0gcXVvdGFcIiBjbGFzcz1cImJsdWVcIj57e1xuICAgICAgcHJvZ3Jlc3NWYWx1ZU9uZSB9fTwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIl9wcm9ncmVzc1R5cGUgIT09IHF1b3RhXCI+e3sgcHJvZ3Jlc3NWYWx1ZVR3byB9fTwvc3Bhbj5cblxuICAgIDxzcGFuICpuZ0lmPVwiX3Byb2dyZXNzVHlwZSA9PT0gcXVvdGFcIiBjbGFzcz1cImJsdWVcIj57e1xuICAgICAgcHJvZ3Jlc3NWYWx1ZU9uZSB8IGN1cnJlbmN5OidCUkwnIH19XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiX3Byb2dyZXNzVHlwZSA9PT0gcXVvdGFcIj57eyBwcm9ncmVzc1ZhbHVlVHdvIHwgY3VycmVuY3k6J0JSTCcgfX1cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT1cIjQwXCIgY2xhc3M9XCJibHVlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICA8ZGl2IGNsYXNzPVwidGV4dHNcIj5cbiAgICA8c3BhbiBjbGFzcz1cImJvdHRvbSBibHVlXCI+e3tcbiAgICAgIGdldEZpcnN0Qm90dG9tTGFiZWwgfX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJib3R0b21cIj57eyBnZXRTZWNvbmRCb3R0b21MYWJlbCB9fTwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfcHJvZ3Jlc3NUeXBlOiBzdHJpbmc7XG4gIF9wcm9ncmVzc1ZhbHVlT25lOiBudW1iZXI7XG4gIF9wcm9ncmVzc1ZhbHVlVHdvOiBudW1iZXI7XG4gIF9wcm9ncmVzc0ljb246IGJvb2xlYW47XG5cbiAgcXVvdGEgPSAncXVvdGEnO1xuICBwcm9kdWN0ID0gJ3Byb2R1Y3QnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcHJvZ3Jlc3NUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9ncmVzc1R5cGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBwcm9ncmVzc1ZhbHVlT25lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcm9ncmVzc1ZhbHVlT25lID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaWNvblRvcCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Byb2dyZXNzSWNvbiA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHByb2dyZXNzVmFsdWVUd28odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Byb2dyZXNzVmFsdWVUd28gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0eXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUeXBlID09PSAncXVvdGEnID8gJ0NvdGFzJyA6ICdQcm9kdXRvcyc7XG4gIH1cblxuICBnZXQgZ2V0Rmlyc3RCb3R0b21MYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUeXBlID09PSAncXVvdGEnID8gJ1ZhbG9yIFJlc2dhdGFkbycgOiAnUHJlc2VudGVhZG9zJztcbiAgfVxuXG4gIGdldCBnZXRTZWNvbmRCb3R0b21MYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUeXBlID09PSAncXVvdGEnID8gJ1ZhbG9yIFByZXNlbnRlYWRvJyA6ICdBZGljaW9uYWRvcyc7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NWYWx1ZU9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NWYWx1ZU9uZTtcbiAgfVxuXG4gIGdldCBwcm9ncmVzc1ZhbHVlVHdvKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc1ZhbHVlVHdvO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzSWNvbkltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc0ljb247XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NJY29uU3JjKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc1R5cGUgPT09ICdxdW90YScgPyAnYXNzZXRzL2ltYWdlcy9pY28tcGxhbmUtYmxhY2suc3ZnJyA6ICdhc3NldHMvaW1hZ2VzL2ljby1wcm9kdWN0LnN2ZydcbiAgfVxuXG59XG4iXX0=