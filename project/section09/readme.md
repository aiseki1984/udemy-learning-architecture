```shell
$ docker compose exec mysql mysql --user=reversi --password=password reversi

# shellscript
$ mkdir ./bin/
$ touch ./bin/connect_mysq.sh
$ chmod +x ./bin/connect_mysql.sh
$ ./bin/connect_mysql.sh
```

## lessoin 45 DDL の作成

```
cf. https://medium-company.com/ddl%E3%81%A8dml%E3%81%AE%E9%81%95%E3%81%84/
・DDL（データ定義言語）
　Data Definition Languageの略でデータを定義するSQL文（CREATE文など）
・DML（データ操作言語）
　Data Manipulation Languageの略でデータを操作するSQL文（SELECT文など）
・DCL（データ制御言語）
　Data Control Languageの略でデータを制御するSQL文（GRANT文など）
```

```mysql
show tables;
Empty set (0.00 sec)
```

```shell
$ cat mysql/init.sql | docker compose exec -T mysql mysql --user=reversi --password=password reversi
```
