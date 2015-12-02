<?php


error_reporting(E_ALL);
ini_set('display_errors',1);
header('Content-type: text/plain; charset=utf-8');


class Api {
    protected $db;
    /**
     * @var PDO
     */
    protected $pdo;
    public function __construct($host,$db, $user, $password)
    {
        $this->pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->query("SET NAMES 'UTF8'");
    }

    public function get($id) {
        $stmt = $this->pdo->prepare("SELECT data FROM users WHERE id = :id");
        $stmt->bindValue('id', $id);
        $stmt->execute();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            return json_decode($row['data'], true);
        }
    }
    public function insert($data) {
        $stmt = $this->pdo->prepare('INSERT INTO users (data) values (:data)');
        if (!is_string($data)) {
            $data = json_encode($data);
        }
        $stmt->bindValue('data', $data);
        $stmt->execute();
        return $this->pdo->lastInsertId();

    }
    public function update($id, $data) {
        $stmt = $this->pdo->prepare('UPDATE users SET data = :data WHERE id = :id');
        if (!is_string($data)) {
            $data = json_encode($data);
        }
        $stmt->bindValue('data', $data);
        $stmt->bindValue('id', $id);
        return $stmt->execute();
    }
    public function listt() {
        $stmt = $this->pdo->query('SELECT * FROM users');
        $list = $stmt->fetchAll(PDO::FETCH_ASSOC);
        foreach ($list as &$d) {
            $d['data'] = json_decode($d['data'], true);
            $d['id'] = intval($d['id']);
        }
        return $list;
    }
    public function delete($id) {
        $stmt = $this->pdo->prepare('DELETE FROM users WHERE id = :id');
        $stmt->bindValue('id', $id);
        return $stmt->execute();
    }
}

$api = new Api('localhost', 'ppsiriu2_ajax', 'ppsiriu2_ajax', 'test');


$post = file_get_contents("php://input");
$post = json_decode($post, true);


header('Content-type: application/json; charset=utf-8');

echo json_encode(call_user_func_array(array($api, $post['method']), $post['data']));

