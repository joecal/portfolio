angular.module('SkillsService', [])

    // super simple service
    // each function returns a promise object
    .factory('Skills', function($http) {
        return {
            get : function() {
                return $http.get('/api/skills');
            },
            create : function(skillData) {
                return $http.post('/api/skills', skillData);
            },
            delete : function(id) {
                return $http.delete('/api/skills/' + id);
            }
        }
    });
