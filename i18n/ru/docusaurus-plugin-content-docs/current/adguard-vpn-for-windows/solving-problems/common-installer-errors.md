---
title: Типичные ошибки установщика
sidebar_position: 2
---

В этой статье собраны наиболее частые ошибки, с которыми вы можете столкнуться во время установки AdGuard для Windows, и возможные пути их решения.

### Ошибка 5: Отказано в доступе {#error-5}

Эта ошибка возникает, когда что-то не в порядке с разрешением на доступ. Почему у установщика AdGuard VPN нет разрешения, которое требуется для завершения установки, может объясняться рядом причин. Выполните следующие действия:

- Временно отключите антивирусы. Некоторые из них могут мешать установке, это зависит от степени жёсткости ваших настроек.

- Выберите другую папку установки. Возможно, что у текущей папки есть ограничения доступа. Также удостоверьтесь, что не выбрали внешний или виртуальный жёсткий диск.

- Перезагрузите компьютер. Иногда проблемы с разрешением временные, и их можно решить с помощью простой перезагрузки.

### Ошибка 112: Недостаточно места на диске, Ошибка 1632: Временная папка переполнена или к ней нет доступа {#error-112}

Две разные ошибки с очень похожими решениями. Как видно из названия, в обоих случаях установщик AdGuard VPN не нашёл достаточно места, чтобы завершить процесс. Вот что вы можете попробовать, чтобы устранить проблему:

- Удалите некоторые программы или ненужные файлы с диска, на который вы пытались установить AdGuard VPN.

- Загрузите, установите и запустите [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), бесплатный инструмент от Malwarebytes. Помимо прочего, он очистит вашу систему от файлов, оставшихся после неправильно удалённых программ. Это освободит место на диске.

- Перезагрузите компьютер. Иногда временные файлы могут занимать много места на диске, и перезагрузка компьютера — самый надёжный способ избавиться от них.

### Ошибка 1601: Нет доступа к службе установки Windows {#error-1601}

Можно сказать, что это частный случай Ошибки 1603. Возможные решения аналогичны:

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Перезагрузите компьютер и запустите установщик заново. Иногда этого достаточно, чтобы устранить проблему.

### Ошибка 1602: Отменено пользователем {#error-1602}

Если у вас возник этот код ошибки, весьма вероятно, что вы тем или иным способом прервали процесс установки вручную. Что вы можете сделать:

- Не закрывайте окно установщика. Когда установка будет завершена, оно закроется автоматически.

- Если во время установки всплывает диалоговое окно, нажмите «Да», чтобы предоставить установщику необходимое разрешение. Нажатие «Нет» отменит установку.

- Не запускайте другие процессы во время установки.

### Ошибка 1603: Во время установки произошла неустранимая ошибка {#error-1603}

Эта ошибка звучит страшнее, чем она есть на самом деле. На практике же это довольно стандартная ошибка, которая может быть обусловлена разными причинами, и некоторые из них легко поправить. Попробуйте следующие решения:

- Нажмите клавишу *Win*, найдите *командную строку* и запустите её. В открывшемся окне введите `sfc /scannow` и нажмите *Enter*.

- Выберите другую папку установки. Возможно, что у текущей папки есть ограничения доступа. Также удостоверьтесь, что не выбрали внешний или виртуальный жёсткий диск.

- Удалите AdGuard VPN с помощью нашего специального [инструмента удаления](../../installation#advanced), а затем повторите установку.

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter ***services.msc***.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1. Open *File Explorer*, right-click the drive containing the installation location, and select *Properties*.
    1. Go to *Security* tab and click *Edit*.
    1. Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    1. Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    1. Click *Change Permissions*.
    1. In *Permissions* tab, double-click *Administrators*.
    1. Select *This folder, subfolders and files* for the *Applies to* field and tick all the available *Basic permissions*. After that hit *OK*.
    1. Do the same operation above (from item 7) for *SYSTEM*.
    1. Click *OK* all the way out. Try installing AdGuard again.

### Ошибка 1618: Уже выполняется другая установка {#error-1618}

Эта ошибка возникает, когда установщик AdGuard VPN запущен несколько раз. Что делать при возникновении этой ошибки:

- Перезагрузите компьютер и запустите установщик заново. Когда вы сделаете это, все текущие процессы будут остановлены, включая копии установщика.

- Не нажимайте на установщик несколько раз, если он не запускается сразу. Иногда отображение интерфейса может занять несколько секунд.

### Ошибка 1638: Другая версия этой программы уже установлена {#error-1638}

Очень вероятно, что вы ранее устанавливали AdGuard VPN.

- Проверьте, установлен ли AdGuard VPN на вашем компьютере. Вы можете сделать это, нажав клавишу *Win* и введя ***AdGuard VPN***.

- Может быть, у вас остались файлы от предыдущей установки AdGuard VPN. Удалите AdGuard с помощью нашего специального [инструмента удаления](../../installation#advanced), а затем повторите установку.

### Другие ошибки {#other}

Если вы столкнулись с ошибкой, не указанной выше, возможно, мы сможем её решить. Но чтобы это сделать, нам нужны ваши логи. Пожалуйста, выполните следующие шаги:

- Найдите и архивируйте **файлы журнала установки AdGuard VPN**, как описано в [этой статье](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Найдите и сохраните на диск логи **Просмотра событий**. [Наша статья](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) объясняет, как это сделать.

Пожалуйста, отправьте файлы из двух предыдущих шагов команде поддержки по адресу **support@adguard.com** и опишите проблему. Наши специалисты ответят вам в кратчайшее время.
