/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["ui5app2/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
