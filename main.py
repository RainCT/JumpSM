#! /usr/bin/env python
# -.- coding: utf-8 -.-

import sys
from PySide.QtCore import *
from PySide.QtGui import *
from PySide.QtDeclarative import QDeclarativeView

def main():
    app = QApplication(sys.argv)
    view = QDeclarativeView()
    url = QUrl('view.qml')
    view.setSource(url)
    view.setResizeMode(QDeclarativeView.SizeRootObjectToView)
    view.show()
    sys.exit(app.exec_())

if __name__ == '__main__':
    main()
