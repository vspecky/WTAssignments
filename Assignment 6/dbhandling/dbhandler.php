<?php
include_once '../config.php';

class Handler {
    private $conn;
    private $table;

    function __construct($conn) {
        $this->conn = $conn;
        $this->table = "wtass6";
    }

    public function addUser($email, $name, $phone, $occ) {
        $sql_statement = "INSERT INTO {$this->table} (email, name, phone, occupation)
            VALUES ( :email, :username, :phone, :occupation );";

        $stmt = $this->conn->prepare($sql_statement);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":username", $name);
        $stmt->bindParam(":phone", $phone);
        $stmt->bindParam(":occupation", $occ);

        $stmt->execute();

        return $stmt->rowCount();
    }

    public function fetchUsers() {
        $sql = "SELECT * FROM {$this->table}";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        return $stmt;
    }

    public function fetchByID($id) {
        $sql = "SELECT * FROM {$this->table} WHERE id = {$id}";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        return $stmt;
    }

    public function updateUser($id, $email, $name, $phone, $occ) {
        $sql = "UPDATE {$this->table} SET name=:username, email=:email, phone=:phone, occupation=:occ WHERE id=:id";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":username", $name);
        $stmt->bindParam(":phone", $phone);
        $stmt->bindParam(":occ", $occ);
        $stmt->bindParam(":id", $id);

        $stmt->execute();

        return $stmt->rowCount();
    }

    public function deleteUser($id) {
        $stmt = $this->conn->prepare("DELETE FROM {$this->table} WHERE id=:id");
        $stmt->bindParam(":id", $id);

        $stmt->execute();

        return $stmt->rowCount();
    }
}
?>
