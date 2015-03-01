//= require_tree .

/* global Lib, Timesheet */

(function(){
  'use strict';

  Lib.ready(function() {
    /* jshint -W031 */
    new Timesheet('timesheet', 2005, 2020, [
      ['02/2010', '2015', 'Married', 'lorem'],
      ['01/2014', '2015', 'Software Architect at Cerner', 'ipsum'],
      ['05/2013', '12/2014', 'Engineer at Cerner', 'dolor'],
      ['10/2005', '02/2013', 'Engineer at Motorola', 'ipsum'],
      ['12/2007', '07/2008', 'Carl living in Munich', 'lorem'],
      ['11/2008', '11/2009', 'Carl back living in Munich', 'lorem']
    ]);

  });
})();
