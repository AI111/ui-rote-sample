/**
 * Created by sasha on 3/21/17.
 */
module app.task1 {


    class CustomeScroll {
        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public scope = {
            onScroll: '&onScroll',
        };

        constructor($timeout)
        {

            CustomeScroll.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) =>
            {
                let scrollDelay = 250,
                    scrollThrottleTimeout,
                    throttled = false,
                    scrollHandler = function(event) {
                        if (!throttled) {
                            scope.onScroll({ev:event});
                            throttled = true;
                            scrollThrottleTimeout = $timeout(function(){
                                throttled = false;
                            }, scrollDelay);
                        }
                    };

                element.on("scroll", scrollHandler);

                scope.$on('$destroy', function() {
                    element.off('scroll', scrollHandler);
                });
            };
        }

        public static Factory()
        {
            var directive = ($timeout) =>
            {
                return new CustomeScroll($timeout);
            };

            directive['$inject'] = ['$timeout'];

            return directive;
        }
    }

    angular.module('app.task1', [])
        .directive('onScroll', CustomeScroll.Factory());
}