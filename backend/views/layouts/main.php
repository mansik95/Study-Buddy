<?php

/* @var $this \yii\web\View */
/* @var $content string */

use backend\assets\DashboardAsset;
use yii\helpers\Html;
use yii\widgets\Breadcrumbs;
use common\widgets\Alert;
use yii\helpers\Url;

DashboardAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body class="hold-transition skin-blue sidebar-mini">
<?php $this->beginBody() ?>

<div class="wrapper">
    <header class="main-header">
    <!-- Logo -->
    <a href="index.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>S</b>B</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>StudyBuddy</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          
          <!-- Notifications: style can be found in dropdown.less -->
          <!-- Tasks: style can be found in dropdown.less -->
          
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs"><?= Yii::$app->user->identity->username;?></span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  <?= Yii::$app->user->identity->username;?>
                  <small></small>
                </p>
              </li>
              <!-- Menu Body -->
              <!-- Menu Footer-->
              <li class="user-footer">
                <?= 
                      Yii::$app->user->isGuest ? (
                      ['label' => 'Login', 'url' => ['/site/login']]
                     ) : (
                      '<div class="pull-center">'
                      . Html::beginForm(['/site/logout'], 'post')
                      . Html::submitButton(
                       'Logout (' . Yii::$app->user->identity->username . ')',
                       ['class' => 'btn btn-default btn-flat']
                      )
                      . Html::endForm()
                      . '</div>'
                     ) 
                ?>
              </li>﻿
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p><?= Yii::$app->user->identity->username;?></p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
      
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=user">
          <i class="fa fa-book">
          </i> <span>User Management</span></a>
        </li>
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=cycle">
          <i class="fa fa-book">
          </i> <span>Cycle Management</span></a>
        </li>
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=level">
          <i class="fa fa-book">
          </i> <span>Level Management</span></a>
        </li>
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=exam">
          <i class="fa fa-book">
          </i> <span>Exam Management</span></a>
        </li>
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=question">
          <i class="fa fa-book">
          </i> <span>Question Management</span></a>
        </li>
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=section">
          <i class="fa fa-book">
          </i> <span>Section Management</span></a>
        </li>
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=subject">
          <i class="fa fa-book">
          </i> <span>Subject Management</span></a>
        </li>
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=topic">
          <i class="fa fa-book">
          </i> <span>Topic Management</span></a>
        </li>
        <li><a href="http://localhost/studybuddy/backend/web/index.php?r=year">
          <i class="fa fa-book">
          </i> <span>Year Management</span></a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
    <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <?= Alert::widget() ?>
        <?= $content ?>
    </div>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
