<?php
 return array (
  'name' => 'customers',
  'label' => '',
  '_id' => 'customers5d72055c2d455',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'name',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    1 => 
    array (
      'name' => 'email',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    2 => 
    array (
      'name' => 'adress',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => 'adress_2',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    4 => 
    array (
      'name' => 'city',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    5 => 
    array (
      'name' => 'zip',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    6 => 
    array (
      'name' => 'oldItems',
      'label' => '',
      'type' => 'object',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'link' => 'products',
        'display' => 'name',
        'multiple' => true,
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    7 => 
    array (
      'name' => 'items',
      'label' => '',
      'type' => 'repeater',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'field' => 
        array (
          'type' => 'set',
          'label' => 'Products',
          'display' => '$value',
          'options' => 
          array (
            'display' => '{qty} x {producttitle}',
            'fields' => 
            array (
              0 => 
              array (
                'type' => 'text',
                'name' => 'qty',
                'label' => 'Qty',
                'options' => 
                array (
                  'type' => 'number',
                ),
              ),
              1 => 
              array (
                'type' => 'text',
                'name' => 'producttitle',
                'label' => 'Product title',
              ),
              2 => 
              array (
                'type' => 'collectionlink',
                'name' => 'product',
                'label' => 'Product',
                'display' => '$value',
                'options' => 
                array (
                  'link' => 'products',
                  'multiple' => false,
                  'limit' => false,
                ),
              ),
            ),
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    8 => 
    array (
      'name' => 'totalItems',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    9 => 
    array (
      'name' => 'totalPrice',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
  ),
  'sortable' => false,
  'in_menu' => false,
  '_created' => 1567753564,
  '_modified' => 1568281972,
  'color' => '#FFCE54',
  'acl' => 
  array (
  ),
  'rules' => 
  array (
    'create' => 
    array (
      'enabled' => false,
    ),
    'read' => 
    array (
      'enabled' => false,
    ),
    'update' => 
    array (
      'enabled' => false,
    ),
    'delete' => 
    array (
      'enabled' => false,
    ),
  ),
);